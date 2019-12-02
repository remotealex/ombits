import React, { useReducer, useState, Reducer } from 'react';
import { Title, Wrapper } from 'om-ui';
import { useKey } from 'react-use';

import { normalizeBits } from '../../utils/normalize-bits';
import { initialState } from './initial-state';
import { reducer } from './reducer';
import { BitInputs } from './BitInputs';
import { State, Payload } from './interfaces';
import { Action } from '../../interfaces/action';

export const Planning = () => {
  // Bits can be deeply nested so we normalize them first
  const { entities, result } = normalizeBits(initialState.bits);

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

  console.log('bits:', state.bits);
  // console.log(denormalizeBits(state.result, { bits: state.bits }));

  return (
    <section>
      <Wrapper>
        <Title as="h2" text="Morning routine" marginBottom={3} />
        <BitInputs
          bitIds={state.result}
          dispatch={dispatch}
          isShiftPressed={isShiftPressed}
          state={state}
        />
      </Wrapper>

      <style jsx>{`
        section {
          padding-top: 80px;
        }
      `}</style>
    </section>
  );
};
