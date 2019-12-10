import React, { Fragment } from 'react';

import {
  ADD_NEW_BIT_BELOW,
  DELETE_BIT,
  FOCUS_NEXT,
  FOCUS_PREVIOUS,
  INDENT_BIT,
  UNINDENT_BIT,
  UPDATE_BIT_TITLE,
} from './action-types';
import { NormalizedBitsState } from '../../interfaces/bits';

interface Props {
  bitIds: string[];
  dispatch: any;
  isShiftPressed: boolean;
  parentBitId?: string;
  state: NormalizedBitsState;
}

export const BitInputs: React.FC<Props> = props => {
  const { bitIds, dispatch, isShiftPressed, parentBitId, state } = props;

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
            <div style={{ marginLeft: `${bit.level * 16 * 2}px` }}>
              <input
                id={bit._id}
                value={bit.title}
                onKeyDown={e => {
                  if (e.key === 'Tab') {
                    e.preventDefault();
                    if (isShiftPressed) {
                      dispatch({ type: UNINDENT_BIT, payload });
                    } else {
                      dispatch({ type: INDENT_BIT, payload });
                    }
                    return;
                  }
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    dispatch({ type: ADD_NEW_BIT_BELOW, payload });
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
                }}
                onChange={e => {
                  const title = e.currentTarget.value;
                  dispatch({
                    type: UPDATE_BIT_TITLE,
                    payload: { _id: bit._id, title },
                  });
                }}
              />
            </div>
            {bit.bits && (
              <BitInputs
                bitIds={bit.bits}
                dispatch={dispatch}
                isShiftPressed={isShiftPressed}
                parentBitId={bit._id}
                state={state}
              />
            )}
          </Fragment>
        );
      })}

      <style jsx>{`
        input {
          background: none;
          border: none;
          font-size: 30px;
          margin-bottom: 10px;
          opacity: 0.4;
          outline: none;
          transition: opacity 0.2s ease;
          width: 100%;
        }

        input:focus {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
