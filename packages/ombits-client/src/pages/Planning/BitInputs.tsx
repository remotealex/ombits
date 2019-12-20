import React, { Fragment } from 'react';
import AutosizeInput from 'react-input-autosize';

import {
  ADD_NEW_BIT_BELOW,
  DELETE_BIT,
  FOCUS_NEXT,
  FOCUS_PREVIOUS,
  INDENT_BIT,
  UNINDENT_BIT,
  UPDATE_BIT_TITLE,
  ADD_NEW_CHILD_BIT,
} from './action-types';
import { NormalizedBitsState, NormalizedBit } from '../../interfaces/bits';
import { BitInputButtons } from './BitInputButtons';
import { Payload } from './interfaces';

interface Props {
  bitIds: string[];
  dispatch: any;
  parentBitId: string;
  state: NormalizedBitsState;
}

export const BitInputs: React.FC<Props> = props => {
  const { bitIds, dispatch, parentBitId, state } = props;

  // Get the normalized bit objects from the store
  const bits = bitIds.map(_id => state.bits[_id]);

  return (
    <div>
      {bits.map(bit => {
        // Setup the payload for easy use
        const payload = {
          _id: bit._id,
          level: bit.level,
          numBits: bit.bits.length,
          parentBitId,
        };

        return (
          <Fragment key={bit._id}>
            <div
              className="PlanningModeInputWrapper"
              style={{ marginLeft: `${bit.level * 16 * 2}px`, display: 'flex' }}
            >
              <AutosizeInput
                id={bit._id}
                inputClassName={
                  bit.isComplete
                    ? 'PlanningModeInput PlanningModeInput__complete'
                    : 'PlanningModeInput'
                }
                value={bit.title}
                onKeyDown={onKeyDown(payload, bit, dispatch)}
                onChange={e => {
                  const title = e.currentTarget.value;
                  dispatch({
                    type: UPDATE_BIT_TITLE,
                    payload: { _id: bit._id, title },
                  });
                }}
              />
              <BitInputButtons
                dispatch={dispatch}
                bit={bit}
                payload={payload}
              />
            </div>
            {bit.bits && (
              <BitInputs
                bitIds={bit.bits}
                dispatch={dispatch}
                parentBitId={bit._id}
                state={state}
              />
            )}
          </Fragment>
        );
      })}

      <style jsx global>{`
        .PlanningModeInput {
          background: none;
          border: none;
          font-size: 30px;
          margin-bottom: 10px;
          min-width: 50px;
          opacity: 0.45;
          outline: none;
          padding-right: 8px;
          transition: opacity 0.2s ease;
        }

        .PlanningModeInput:focus {
          opacity: 1;
        }

        .PlanningModeInput__complete {
          text-decoration: line-through;
          opacity: 0.15;
        }

        .PlanningModeInputWrapper:hover .BitInputButtons {
          display: flex;
        }
      `}</style>
    </div>
  );
};

const onKeyDown = (payload: Payload, bit: NormalizedBit, dispatch: any) => (
  e: React.KeyboardEvent<HTMLDivElement>,
) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    if (e.shiftKey) {
      dispatch({ type: UNINDENT_BIT, payload });
    } else {
      dispatch({ type: INDENT_BIT, payload });
    }
    return;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    // Cmd (mac) or Ctrl
    if (e.metaKey || e.ctrlKey) {
      dispatch({ type: ADD_NEW_CHILD_BIT, payload });
    } else {
      dispatch({ type: ADD_NEW_BIT_BELOW, payload });
    }
    return;
  }
  if (e.key === 'Backspace') {
    if (bit.title.length === 0) {
      e.preventDefault();
      dispatch({ type: DELETE_BIT, payload });
      return;
    }
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    dispatch({ type: FOCUS_PREVIOUS, payload });
    // Delete the bit if it's empty
    if (bit.title === '') {
      dispatch({
        type: DELETE_BIT,
        payload: { ...payload, noFocus: true },
      });
    }
    return;
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    dispatch({ type: FOCUS_NEXT, payload });
    // Delete the bit if it's empty
    if (bit.title === '') {
      dispatch({
        type: DELETE_BIT,
        payload: { ...payload, noFocus: true },
      });
    }
    return;
  }
};
