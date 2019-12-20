import React, { useReducer, Reducer, useEffect, useState } from 'react';
import { Button, Text, Title } from 'om-ui';

import { normalizeBits } from '../../utils/normalize-bits';
import { findNextBit } from '../../utils/find-next-bit';
import { reducer } from './reducer';
import { NormalizedBitsState } from '../../interfaces/bits';
import { State, Payload } from './interfaces';
import { MARK_BIT_AS_COMPLETE } from './action-types';
import { Action } from '../../interfaces/action';
import { Bit } from '../../interfaces/bits';
import { updateProject } from '../../utils/update-project';

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

  // Then we setup the reducer
  const [state, dispatch] = useReducer<
    Reducer<NormalizedBitsState & State, Action<Payload>>
  >(reducer, {
    bits: entities.bits,
    result,
  });

  const [isSavePending, setSavePending] = useState(false);

  useEffect(
    () => {
      if (isSavePending) {
        updateProject(project._id, state.bits, state.result);
        setSavePending(false);
      }
    },
    [isSavePending, setSavePending, state, project._id],
  );

  const bitArr = Object.values(state.bits);
  const currentBitId = findNextBit(bitArr);
  const currentBit = state.bits[currentBitId];

  // TEMP: I don't think we need this but keeping it for now
  if (!currentBit) {
    return <div>Loading...</div>;
  }

  const isTopLevel = result.includes(currentBitId);
  const bitParent = bitArr.find(b => b.bits.includes(currentBitId));
  const bitTitle = isTopLevel
    ? project.title
    : bitParent
      ? bitParent.title
      : null;

  return (
    <div>
      <Text as="p" text={bitTitle} marginBottom={1} />
      <Title as="h1" text={currentBit.title} marginBottom={4} />
      <div className="done">
        <Button
          intent="primary"
          text="Done"
          marginBottom={1}
          size="large"
          onClick={() => {
            dispatch({
              type: MARK_BIT_AS_COMPLETE,
              payload: { bitId: currentBitId },
            });
            setSavePending(true);
          }}
        />
      </div>
      <Button text="Skip" />
    </div>
    // <style jsx>{`
    // `}</style>
  );
};
