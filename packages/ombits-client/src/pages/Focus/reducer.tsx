import produce from 'immer';

import { Action } from '../../interfaces/action';
import { NormalizedBitsState } from '../../interfaces/bits';
import { State, Payload } from './interfaces';
import { MARK_BIT_AS_COMPLETE } from './action-types';

// Immer reducer
export const reducer = produce(
  (draft: NormalizedBitsState & State, action: Action<Payload>) => {
    const { bitId } = action.payload;

    // Helper function which recursively checks if the parent
    // bit needs to be completed because all of it's children have
    // been completed
    const completeParentIfNeeded = (bId: string) => {
      // Find the parent if there is one
      const parent = Object.values(draft.bits).find(b => b.bits.includes(bId));
      if (parent) {
        // See if it's the last bit in the parent
        const bIdx = parent.bits.findIndex(_id => _id === bId);
        const isLast = bIdx === parent.bits.length - 1;
        // If it's the last bit of the parent, we need to complete
        // the parent too!
        if (isLast) {
          draft.bits[parent._id].isComplete = true;
          // Call it again on the parent to make complete that too
          // if it's nested
          completeParentIfNeeded(parent._id);
        }
      }
    };

    switch (action.type) {
      case MARK_BIT_AS_COMPLETE:
        draft.bits[bitId].isComplete = true;
        completeParentIfNeeded(bitId);
        break;
    }
  },
);
