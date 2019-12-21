import produce from 'immer';

import { generateId } from '../../utils/generate-id';
import { focusEl } from '../../utils/focus-element';
import { Action } from '../../interfaces/action';
import { NormalizedBitsState } from '../../interfaces/bits';
import { Payload } from './interfaces';
import { completeParents } from '../../utils/complete-parents';
import { resetParents } from '../../utils/reset-parents';
import { deleteChildren } from '../../utils/delete-children';
import { setCompletionStateForChildren } from '../../utils/complete-children';
import {
  ADD_NEW_BIT_BELOW,
  DELETE_BIT,
  FOCUS_NEXT,
  FOCUS_PREVIOUS,
  INDENT_BIT,
  UNINDENT_BIT,
  UPDATE_BIT_TITLE,
  SET_BIT_COMPLETION_STATE,
  ADD_NEW_CHILD_BIT,
} from './action-types';

// Immer reducer
export const reducer = produce(
  (draft: NormalizedBitsState, action: Action<Payload>) => {
    const {
      _id,
      level,
      newCompleteState,
      noFocus,
      numBits,
      parentBitId,
    } = action.payload;

    const bitIdx = parentBitId
      ? draft.bits[parentBitId].bits.findIndex(id => id === _id)
      : draft.result.findIndex(id => id === _id);

    // If there is no parent ID, we use the results array as it's the top level
    const siblingBits = parentBitId
      ? draft.bits[parentBitId].bits
      : draft.result;
    const bitAboveId = bitIdx === 0 ? parentBitId : siblingBits[bitIdx - 1];
    // This is a recursive function to find the lowest child of the bit above
    const getPreviousBitId = (_id: string, idx: number): string => {
      const bitsOfPreviousBit = draft.bits[_id].bits;
      if (bitsOfPreviousBit.length === 0 || idx === 0) {
        return _id;
      }
      const bitIdToFocus = bitsOfPreviousBit[bitsOfPreviousBit.length - 1];
      return getPreviousBitId(bitIdToFocus, idx);
    };

    // Find the grandparent Id by checking which bit contains the parent ID
    const getGrandParentInfo = (pId: string) => {
      let grandparentId = '';
      Object.keys(draft.bits).forEach(_id => {
        const bit = draft.bits[_id];
        if (bit.bits.includes(pId)) {
          grandparentId = _id;
        }
      });

      // If it's not in the regular bits, it's a top level grandparent
      // so we go to the result array
      const grandparentBits = grandparentId
        ? draft.bits[grandparentId].bits
        : draft.result;
      const parentBitIdx = grandparentBits.findIndex(_id => _id === pId);

      return { grandparentId, grandparentBits, parentBitIdx };
    };

    switch (action.type) {
      case UPDATE_BIT_TITLE:
        draft.bits[_id].title = action.payload.title || '';
        break;

      case FOCUS_PREVIOUS:
        let previousId;

        // If we're trying to go up from the very top result
        // go to the very bottom result
        if (draft.result[0] === _id) {
          const lastResultIdx = draft.result.length - 1;
          previousId = getPreviousBitId(
            draft.result[lastResultIdx],
            lastResultIdx,
          );
        } else {
          previousId = getPreviousBitId(bitAboveId, bitIdx);
        }

        focusEl(previousId);
        break;

      case FOCUS_NEXT:
        // Recursively go up parents until we get to one with a child under this one
        const getNextBitId = (bitId: string): string => {
          const {
            grandparentId,
            grandparentBits,
            parentBitIdx,
          } = getGrandParentInfo(bitId);
          if (grandparentBits.length - parentBitIdx > 1) {
            return grandparentBits[parentBitIdx + 1];
          }
          return getNextBitId(grandparentId);
        };

        // If this bit has a child, go to it.
        // If it has a lower sibling, go to that.
        // Otherwise, find the next cousin.
        const nextBitId =
          numBits > 0
            ? draft.bits[_id].bits[0]
            : siblingBits.length - bitIdx > 1
            ? siblingBits[bitIdx + 1]
            : getNextBitId(parentBitId);

        focusEl(nextBitId);
        break;

      case DELETE_BIT:
        // Delete any children
        deleteChildren(draft, _id);

        // Then remove the bit from it's parent array
        siblingBits.splice(bitIdx, 1);

        // Focus the previous element when required
        if (!noFocus) {
          focusEl(getPreviousBitId(bitAboveId, bitIdx));
        }
        break;

      case INDENT_BIT:
        // We don't want to indent it if it's the first child as it doesn't make sense
        if (bitIdx === 0) {
          break;
        }

        // Update the level of the bit and it's children
        draft.bits[_id].level++;
        draft.bits[_id].bits.forEach(_id => draft.bits[_id].level++);

        // Firstly we need to move the bit to the correct parent
        const newParentId = siblingBits[bitIdx - 1];

        // Then we need to add the id to the NEW parent
        draft.bits[newParentId].bits.push(_id);

        // And then remove the it from the old one
        siblingBits.splice(bitIdx, 1);

        // Make sure the parents are synced
        completeParents(draft, _id);
        resetParents(draft, _id);

        focusEl(_id);
        break;

      case UNINDENT_BIT:
        // We cant unindent top level bits
        if (!parentBitId) {
          break;
        }

        // Remove the id from the parent
        draft.bits[parentBitId].bits.splice(bitIdx, 1);

        // Add it to the grandparent
        const { grandparentBits, parentBitIdx } = getGrandParentInfo(
          parentBitId,
        );
        grandparentBits.splice(parentBitIdx + 1, 0, _id);

        // Update the level and levels of it's children
        draft.bits[_id].level--;
        draft.bits[_id].bits.forEach(_id => draft.bits[_id].level--);

        focusEl(_id);
        break;

      case ADD_NEW_BIT_BELOW:
        const newId = generateId();

        // Add a new empty bit to the normalized bits object
        draft.bits[newId] = {
          _id: newId,
          title: '',
          level,
          bits: [],
        };

        // Add the new element below this one
        siblingBits.splice(bitIdx + 1, 0, newId);

        // Make sure the parent as marked as incomplete
        resetParents(draft, newId);

        focusEl(newId);
        break;

      case ADD_NEW_CHILD_BIT:
        const newId2 = generateId();

        // Add a new empty bit to the normalized bits object
        draft.bits[newId2] = {
          _id: newId2,
          title: '',
          level: level + 1,
          bits: [],
        };

        // Add the new element as a child of this one
        draft.bits[_id].bits.push(newId2);

        // Make sure the parent as marked as incomplete
        resetParents(draft, newId2);

        focusEl(newId2);
        break;

      case SET_BIT_COMPLETION_STATE:
        draft.bits[_id].isComplete = newCompleteState;
        setCompletionStateForChildren(draft, _id, newCompleteState);
        if (newCompleteState) {
          completeParents(draft, _id);
        } else {
          resetParents(draft, _id);
        }
        break;
    }
  },
);
