import produce from 'immer';

import { Action } from '../../interfaces/action';
import { NormalizedBitsState } from '../../interfaces/bits';
import { State, Payload } from './interfaces';
import { SET_CURRENT_BIT_ID } from './action-types';

// Immer reducer
export const reducer = produce(
  (draft: NormalizedBitsState & State, action: Action<Payload>) => {
    const { currentBitId } = action.payload;

    switch (action.type) {
      case SET_CURRENT_BIT_ID:
        draft.currentBitId = currentBitId ? currentBitId : draft.currentBitId;
        break;
    }
  },
);
