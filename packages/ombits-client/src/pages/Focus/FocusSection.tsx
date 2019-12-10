import React, { useReducer, Reducer, useEffect } from 'react';
import { Button, Text, Title } from 'om-ui';

import {
  normalizeBits,
  // denormalizeBits
} from '../../utils/normalize-bits';
// import { flattenBits } from '../../utils/flatten-bits';
import { reducer } from './reducer';
import { NormalizedBitsState } from '../../interfaces/bits';
import { State, Payload } from './interfaces';
import { Action } from '../../interfaces/action';
import { Bit } from '../../interfaces/bits';
import { SET_CURRENT_BIT_ID } from './action-types';

interface Props {
  bits: Bit[];
  project: any; // TODO
}

export const FocusSection: React.FC<Props> = ({
  bits: originalBits,
  project,
}) => {
  // Bits can be deeply nested so we normalize them first
  const { entities, result } = normalizeBits(originalBits);

  // Get the initial
  const bitArr = Object.values(entities.bits);
  const incompleteBits = bitArr.filter((b: Bit) => !b.isComplete);
  const initialBitId = incompleteBits.shift()._id || bitArr[0]._id;

  // Then we setup the reducer
  const [state, dispatch] = useReducer<
    Reducer<NormalizedBitsState & State, Action<Payload>>
  >(reducer, {
    currentBitId: '',
    bits: entities.bits,
    result,
  });

  useEffect(() => {
    // TODO: we need to set the correct child;
    dispatch({
      type: SET_CURRENT_BIT_ID,
      payload: { currentBitId: initialBitId },
    });
  }, [initialBitId]);

  const { currentBitId, bits } = state;
  const currentBit = bits[currentBitId];

  if (!currentBit) {
    return <div>Loading...</div>;
  }

  const isTopLevel = result.includes(currentBitId);

  console.log(state, dispatch);

  return (
    <div>
      <Text as="p" text={isTopLevel ? project.title : ''} marginBottom={1} />
      <Title as="h1" text={currentBit.title} marginBottom={4} />
      <div className="done">
        <Button intent="primary" text="Done" marginBottom={1} size="large" />
      </div>
      <Button text="Skip" />
    </div>
    // <style jsx>{`
    // `}</style>
  );
};
