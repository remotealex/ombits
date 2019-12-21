import produce from 'immer';

import { Action } from '../../interfaces/action';
import { NormalizedBitsState } from '../../interfaces/bits';
import { completeParents } from '../../utils/complete-parents';
import { State, Payload } from './interfaces';
import { MARK_BIT_AS_COMPLETE } from './action-types';

// Immer reducer
export const reducer = produce(
  (draft: NormalizedBitsState & State, action: Action<Payload>) => {
    const { bitId } = action.payload;

    switch (action.type) {
      case MARK_BIT_AS_COMPLETE:
        draft.bits[bitId].isComplete = true;
        completeParents(draft, bitId);
        break;
    }
  },
);
