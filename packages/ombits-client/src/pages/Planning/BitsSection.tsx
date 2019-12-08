import React, { useReducer, useState, Reducer } from 'react';
import { useKey } from 'react-use';

import { normalizeBits } from '../../utils/normalize-bits';
import { reducer } from './reducer';
import { BitInputs } from './BitInputs';
import { State, Payload } from './interfaces';
import { Action } from '../../interfaces/action';
import { Bit } from '../../interfaces/bits';

interface Props {
  bits: Bit[];
}

export const BitsSection: React.FC<Props> = ({ bits }) => {
  // // Bits can be deeply nested so we normalize them first
  const { entities, result } = normalizeBits(bits);

  // Then we setup the reducer
  const [state, dispatch] = useReducer<Reducer<State, Action<Payload>>>(
    reducer,
    {
      bits: entities.bits,
      result,
    },
  );

  // Track if the Shift key is being held
  const [isShiftPressed, setShiftPressedState] = useState(false);
  useKey('Shift', () => setShiftPressedState(true), { event: 'keydown' });
  useKey('Shift', () => setShiftPressedState(false), { event: 'keyup' });

  // Keeping for reference for now
  // console.log(denormalizeBits(state.result, { bits: state.bits }));

  console.log(state);

  return (
    <BitInputs
      bitIds={state.result}
      dispatch={dispatch}
      isShiftPressed={isShiftPressed}
      state={state}
    />
  );
};
