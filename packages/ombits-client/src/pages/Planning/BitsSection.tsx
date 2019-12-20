import React, { useReducer, useState, Reducer } from 'react';
import { useKey, useDebounce } from 'react-use';

import { normalizeBits } from '../../utils/normalize-bits';
import { reducer } from './reducer';
import { BitInputs } from './BitInputs';
import { Payload } from './interfaces';
import { Action } from '../../interfaces/action';
import { Bit, NormalizedBitsState } from '../../interfaces/bits';
import { compareObjects } from '../../utils/compare-objects';
import { updateProject } from '../../utils/update-project';
import { ReactHint } from '../..';

interface Props {
  bits: Bit[];
  projectId: string;
}

export const BitsSection: React.FC<Props> = ({ bits, projectId }) => {
  // Bits can be deeply nested so we normalize them first
  const { entities, result } = normalizeBits(bits);

  // Then we setup the reducer
  const [state, dispatch] = useReducer<
    Reducer<NormalizedBitsState, Action<Payload>>
  >(reducer, {
    bits: entities.bits,
    result,
  });

  // Debounce the saving of bit changes until there has been a
  // 1 second interval
  useDebounce(
    () => {
      // Simple object comparison
      const isChanged = !compareObjects(entities.bits, state.bits);
      if (isChanged) {
        updateProject(projectId, state.bits, state.result);
      }
    },
    1000,
    [state],
  );

  // Track if the Shift key is being held
  const [isShiftPressed, setShiftPressedState] = useState(false);
  useKey('Shift', () => setShiftPressedState(true), { event: 'keydown' });
  useKey('Shift', () => setShiftPressedState(false), { event: 'keyup' });

  return (
    <>
      <BitInputs
        bitIds={state.result}
        dispatch={dispatch}
        isShiftPressed={isShiftPressed}
        parentBitId={''}
        state={state}
      />
      <ReactHint events={{ hover: true }} delay={{ show: 500 }} />

      <style jsx global>{`
        .react-hint__content {
          background: transparent;
          color: white;
          font-size: 12px;
          font-weight: bold;
          padding: 0;
        }
      `}</style>
    </>
  );
};
