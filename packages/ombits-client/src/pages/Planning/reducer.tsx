import produce from 'immer';

import { generateUUID } from '../../utils/generate-uuid';
import { focusEl } from '../../utils/focus-element';
import { Action } from '../../interfaces/action';
import { State, Payload } from './interfaces';
import {
  ADD_NEW_BIT_BELOW,
  DELETE_BIT,
  INDENT_BIT,
  UNINDENT_BIT,
  UPDATE_BIT_TITLE,
  FOCUS_PREVIOUS,
  FOCUS_NEXT,
} from './action-types';

// Immer reducer
export const reducer = produce((draft: State, action: Action<Payload>) => {
  const { id, level, numBits, parentBitId, noFocus } = action.payload;

  const bitIdx = parentBitId
    ? draft.bits[parentBitId].bits.findIndex(_id => _id === id)
    : draft.result.findIndex(_id => _id === id);

  // If there is no parent ID, we use the results array as it's the top level
  const siblingBits = parentBitId ? draft.bits[parentBitId].bits : draft.result;
  const bitAboveId = bitIdx === 0 ? parentBitId : siblingBits[bitIdx - 1];
  // This is a recursive function to find the lowest child of the bit above
  const getPreviousBitId = (_id: string, idx: number): string => {
    const bitsOfPreviousBit = draft.bits[_id].bits;
    console.log(Object.values(bitsOfPreviousBit));
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
      draft.bits[id].title = action.payload.title || '';
      break;

    case FOCUS_PREVIOUS:
      let previousId;

      // If we're trying to go up from the very top result
      // go to the very bottom result
      if (draft.result[0] === id) {
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
          ? draft.bits[id].bits[0]
          : siblingBits.length - bitIdx > 1
          ? siblingBits[bitIdx + 1]
          : getNextBitId(parentBitId);

      focusEl(nextBitId);
      break;

    case DELETE_BIT:
      // TODO: Delete item with children (pop-confirm)
      if (numBits === 0) {
        // Remove the bit from the parent
        siblingBits.splice(bitIdx, 1);

        // Focus the previous element when required
        if (!noFocus) {
          focusEl(getPreviousBitId(bitAboveId, bitIdx));
        }
      }
      break;

    case INDENT_BIT:
      // We don't want to indent it if it's the first child as it doesn't make sense
      if (bitIdx === 0) {
        break;
      }

      // Update the level of the bit and it's children
      draft.bits[id].level++;
      draft.bits[id].bits.forEach(_id => draft.bits[_id].level++);

      // Firstly we need to move the bit to the correct parent
      const newParentId = siblingBits[bitIdx - 1];

      // Then we need to add the id to the NEW parent
      draft.bits[newParentId].bits.push(id);

      // And then remove the it from the old one
      siblingBits.splice(bitIdx, 1);

      focusEl(id);
      break;

    case UNINDENT_BIT:
      // We cant unindent top level bits
      if (!parentBitId) {
        break;
      }

      // Remove the id from the parent
      draft.bits[parentBitId].bits.splice(bitIdx, 1);

      // Add it to the grandparent
      const { grandparentBits, parentBitIdx } = getGrandParentInfo(parentBitId);
      grandparentBits.splice(parentBitIdx + 1, 0, id);

      // Update the level and levels of it's children
      draft.bits[id].level--;
      draft.bits[id].bits.forEach(_id => draft.bits[_id].level--);

      focusEl(id);
      break;

    case ADD_NEW_BIT_BELOW:
      const newId = generateUUID();

      // Add a new empty bit to the normalized bits object
      draft.bits[newId] = {
        id: newId,
        title: '',
        level,
        bits: [],
      };

      // Add the new element below this one
      siblingBits.splice(bitIdx + 1, 0, newId);

      focusEl(newId);
      break;
  }
});
