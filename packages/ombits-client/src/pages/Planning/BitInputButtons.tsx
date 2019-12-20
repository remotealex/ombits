import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDotCircle,
  faCheckCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';

import { NormalizedBit } from '../../interfaces/bits';
import { Payload } from './interfaces';
import { SET_BIT_COMPLETE_STATE, DELETE_BIT } from './action-types';

interface Props {
  bit: NormalizedBit;
  dispatch: any;
  payload: Payload;
}

export const BitInputButtons: React.FC<Props> = props => {
  const { bit, dispatch, payload } = props;

  return (
    <div className="BitInputButtons">
      <button
        data-rh={bit.isComplete ? 'Mark as incomplete' : 'Mark as complete'}
        className={
          bit.isComplete
            ? 'BitInputButton BitInputButton__complete'
            : 'BitInputButton'
        }
        onClick={() => {
          dispatch({
            type: SET_BIT_COMPLETE_STATE,
            payload: { ...payload, newCompleteState: !bit.isComplete },
          });
        }}
      >
        <FontAwesomeIcon
          icon={bit.isComplete ? faCheckCircle : faDotCircle}
          size="2x"
        />
      </button>
      <button
        className="BitInputButton BitInputButton__delete"
        data-rh="Delete"
        onClick={() => {
          dispatch({ type: DELETE_BIT, payload });
        }}
        style={{ marginLeft: '4px' }}
      >
        <FontAwesomeIcon icon={faMinusCircle} size="2x" />
      </button>

      <style jsx global>{`
        .BitInputButtons {
          display: none;
          position: relative;
          top: -2px;
          align-items: center;
        }

        .BitInputButton {
          background: none;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          outline: none;
          padding: 2px;
        }

        .BitInputButton__complete svg > * {
          fill: #2cb67d;
        }

        .BitInputButton__delete svg > * {
          fill: #df5040;
        }

        .BitInputButton svg {
          opacity: 0.5;
        }

        .BitInputButton:hover svg {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};
