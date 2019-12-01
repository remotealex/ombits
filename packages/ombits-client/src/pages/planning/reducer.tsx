import produce from 'immer';

import { generateUUID } from '../../utils/generate-uuid';
import { focusEl } from '../../utils/focus-element';
import { Action } from '../../interfaces/action';
import { State, Payload } from './interfaces';
import {
  ADD_NEW_BIT_BELOW,
  INDENT_BIT,
  UNINDENT_BIT,
  UPDATE_BIT_TITLE,
} from './action-types';

// Immer reducer
// TODO: delete item
// TODO: Navigate up and down items with cursor keys (focus)
export const reducer = produce((draft: State, action: Action<Payload>) => {
  const { id, level, bitAboveId, parentBitId } = action.payload;

  const bitIdx = parentBitId
    ? draft.bits[parentBitId].bits.findIndex(_id => _id === id)
    : draft.result.findIndex(_id => _id === id);

  switch (action.type) {
    case UPDATE_BIT_TITLE:
      draft.bits[id].title = action.payload.title || '';
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
      const oldParentBits = parentBitId
        ? draft.bits[parentBitId].bits
        : draft.result;
      const newParentId = oldParentBits[bitIdx - 1];

      // Then we need to add the id to the NEW parent
      draft.bits[newParentId].bits.push(id);

      // And then remove the it from the old one
      oldParentBits.splice(bitIdx, 1);

      focusEl(id);
      break;

    case UNINDENT_BIT:
      // We cant unindent top level bits
      if (!parentBitId) {
        break;
      }

      // Remove the id from the parent
      draft.bits[parentBitId].bits.splice(bitIdx, 1);

      // Now we need to add the bit to the grandparent
      // First find it...
      let grandparentId = '';
      Object.keys(draft.bits).forEach(_id => {
        const bit = draft.bits[_id];
        if (bit.bits.includes(parentBitId)) {
          grandparentId = _id;
        }
      });

      // If it's not in the regular bits, it's a top level grandparent
      // so we go to the result array and add it there.
      const grandparentBits = grandparentId
        ? draft.bits[grandparentId].bits
        : draft.result;
      const parentBitIdx = grandparentBits.findIndex(
        _id => _id === parentBitId,
      );
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

      // Now we have to add it to the correct parent.
      // If it's at level 0, add it to the results array,
      // if not, add it to the correct parent.
      const siblings =
        level === 0 ? draft.result : draft.bits[parentBitId].bits;
      const idxOfBitAbove = siblings.findIndex(_id => _id === bitAboveId);

      siblings.splice(idxOfBitAbove + 1, 0, newId);

      focusEl(newId);
      break;
  }
});
