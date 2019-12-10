import React, { useReducer, useState, Reducer } from 'react';
import NProgress from 'nprogress';
import { useMutation } from 'react-apollo';
import { useKey, useDebounce } from 'react-use';

import { normalizeBits, denormalizeBits } from '../../utils/normalize-bits';
import { reducer } from './reducer';
import { BitInputs } from './BitInputs';
import { Payload } from './interfaces';
import { Action } from '../../interfaces/action';
import { Bit, NormalizedBitsState } from '../../interfaces/bits';
import { UPDATE_PROJECT_BITS } from '../../mutations/projects';
import { compareObjects } from '../../utils/compare-objects';
import { omitDeep } from '../../utils/omit-deep';

interface Props {
  bits: Bit[];
  projectId: string;
}

export const BitsSection: React.FC<Props> = ({ bits, projectId }) => {
  const [updateProjectBits] = useMutation(UPDATE_PROJECT_BITS);

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
    async () => {
      // Simple object comparison
      const isChanged = !compareObjects(entities.bits, state.bits);
      if (isChanged) {
        NProgress.start();
        // Strip out __typename from query
        const dBits = denormalizeBits(state.result, {
          bits: state.bits,
        });
        await updateProjectBits({
          variables: {
            _id: projectId,
            // Remove the __typename prop that has been injected
            bits: dBits.map(b => omitDeep(b, '__typename')),
          },
        });
        NProgress.done();
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
    <BitInputs
      bitIds={state.result}
      dispatch={dispatch}
      isShiftPressed={isShiftPressed}
      state={state}
    />
  );
};
