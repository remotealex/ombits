import React, { useReducer, useState, Fragment } from 'react';
import { Title, Wrapper } from 'om-ui';
import produce from 'immer';
import { useKey } from 'react-use';

import { Bit } from '../interfaces/bits';
import { generateUUID } from '../utils/generate-uuid';
// import { searchBits } from '../utils/search-bits';
import {
  normalizeBits,
  // denormalizeBits
} from '../utils/normalize-bits';

interface Action {
  type: string;
  payload: any;
}

const initialState = {
  bits: [
    {
      // id: generateUUID(),
      id: 'Foo',
      title: 'Foo',
      level: 0,
      bits: [
        {
          // id: generateUUID(),
          id: 'Foo1',
          title: 'Foo1',
          level: 1,
          bits: [] as Bit[],
        },
        {
          // id: generateUUID(),
          id: 'Foo2',
          title: 'Foo2',
          level: 1,
          bits: [
            {
              // id: generateUUID(),
              id: 'Poo',
              title: 'Poo',
              level: 2,
              bits: [] as Bit[],
            },
            {
              // id: generateUUID(),
              id: 'Loo',
              title: 'Loo',
              level: 2,
              bits: [] as Bit[],
            },
          ],
        },
        {
          // id: generateUUID(),
          id: 'Foo3',
          title: 'Foo3',
          level: 1,
          bits: [
            {
              // id: generateUUID(),
              id: 'Poo2',
              title: 'Poo2',
              level: 2,
              bits: [] as Bit[],
            },
            {
              // id: generateUUID(),
              id: 'Loo2',
              title: 'Loo2',
              level: 2,
              bits: [] as Bit[],
            },
          ],
        },
      ],
    },
    {
      // id: generateUUID(),
      id: 'Bar',
      title: 'Bar',
      level: 0,
      bits: [] as Bit[],
    },
    {
      // id: generateUUID(),
      id: 'Baz',
      title: 'Baz',
      level: 0,
      bits: [
        {
          // id: generateUUID(),
          id: 'Baz2',
          title: 'Baz2',
          level: 1,
          bits: [] as Bit[],
        },
      ],
    },
  ] as Bit[],
};

const focusEl = (id: string) => {
  // Make sure the element is in the DOM then focus it
  setTimeout(() => {
    const el = document.getElementById(id);
    el && el.focus();
  }, 10);
};

// Immer reducer
const reducer = produce((draft, action) => {
  const { id, level, bitAboveId, parentBitId } = action.payload;

  const bitIdx = parentBitId
    ? draft.bits[parentBitId].bits.findIndex((_id: string) => _id === id)
    : draft.result.findIndex((_id: string) => _id === id);

  switch (action.type) {
    case 'updateBitTitle':
      draft.bits[id].title = action.payload.title;
      break;

    case 'indentBit':
      // We don't want to indent it if it's the first child as it doesn't make sense
      if (bitIdx === 0) {
        break;
      }

      // Update the level of the bit and it's children
      draft.bits[id].level = level + 1;
      draft.bits[id].bits.forEach((_id: string) => {
        draft.bits[_id].level = level + 2;
      });

      // Lastly we need to move the bit to the correct parent
      const oldParentBits = parentBitId
        ? draft.bits[parentBitId].bits
        : draft.result;
      const newParentId = oldParentBits[bitIdx - 1];

      // First add the id to the NEW parent
      draft.bits[newParentId].bits.push(id);

      // Secondly, remove the it from the old one
      oldParentBits.splice(bitIdx, 1);

      focusEl(id);
      break;

    case 'unindentBit':
      if (!parentBitId) {
        break;
      }

      // Remove the id from the parent
      draft.bits[parentBitId].bits.splice(bitIdx, 1);

      // Now we need to add the bit to the grandparent
      // First find it...
      let grandparentId = '';
      Object.keys(draft.bits).forEach((_id: string) => {
        const bit = draft.bits[_id];
        if (bit.bits.includes(parentBitId)) {
          grandparentId = _id;
        }
      });

      // If it's not in the regular bits, it's a top level grandparent
      // so we go to the result array and add it there.
      const grandparentBits = grandparentId
        ? draft.bits[grandparentId].bits
        : draft.result;
      const parentBitIdx = grandparentBits.findIndex(
        (_id: string) => _id === parentBitId,
      );
      grandparentBits.splice(parentBitIdx + 1, 0, id);

      // Update the level and levels of it's children
      draft.bits[id].level = level - 1;
      draft.bits[id].bits.forEach((_id: string) => {
        draft.bits[_id].level = level;
      });

      focusEl(id);
      break;

    case 'addNewBitBelow':
      const newId = generateUUID();

      // Add a new empty bit to the normalized bits object
      draft.bits[newId] = {
        id: newId,
        title: '',
        level,
        bits: [],
      };

      // Now we have to add it to the correct parent.
      // If it's at level 0, add it to the results array,
      // if not, add it to the correct parent.
      const siblings =
        level === 0 ? draft.result : draft.bits[parentBitId].bits;
      const idxOfBitAbove = siblings.findIndex(
        (_id: string) => _id === bitAboveId,
      );
      siblings.splice(idxOfBitAbove + 1, 0, newId);

      focusEl(newId);
      break;
  }
});

export const Planning = () => {
  // Bits can be deeply nested so we normalize them first
  const { entities, result } = normalizeBits(initialState.bits);

  // Then we setup the reducer
  const [state, dispatch] = useReducer(reducer, {
    bits: entities.bits,
    result,
  });

  // Track if the Shift key is being held
  const [isShiftPressed, setShiftPressedState] = useState(false);
  useKey('Shift', () => setShiftPressedState(true), { event: 'keydown' });
  useKey('Shift', () => setShiftPressedState(false), { event: 'keyup' });

  // console.log(denormalizeBits(state.result, { bits: state.bits }));

  console.log('bits:', state.bits);

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

interface Props {
  bitIds: string[];
  dispatch: any;
  isShiftPressed: boolean;
  parentBitId?: string;
  state: any;
}

const BitInputs: React.FC<Props> = props => {
  const { bitIds, dispatch, isShiftPressed, parentBitId, state } = props;

  const bits = bitIds.map(id => state.bits[id]);

  return (
    <div>
      {bits.map(bit => {
        const payload = {
          id: bit.id,
          level: bit.level,
          bitAboveId: bit.id,
          parentBitId,
        };

        return (
          <Fragment key={bit.id}>
            <div style={{ marginLeft: `${bit.level * 16 * 2}px` }}>
              <input
                id={bit.id}
                value={bit.title}
                onKeyDown={e => {
                  if (e.key === 'Tab') {
                    e.preventDefault();
                    if (isShiftPressed) {
                      dispatch({ type: 'unindentBit', payload });
                    } else {
                      dispatch({ type: 'indentBit', payload });
                    }
                  }
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    dispatch({ type: 'addNewBitBelow', payload });
                  }
                }}
                onChange={e => {
                  const title = e.currentTarget.value;
                  dispatch({
                    type: 'updateBitTitle',
                    payload: { id: bit.id, title },
                  });
                }}
              />
            </div>
            {bit.bits && (
              <BitInputs
                bitIds={bit.bits}
                dispatch={dispatch}
                isShiftPressed={isShiftPressed}
                parentBitId={bit.id}
                state={state}
              />
            )}
          </Fragment>
        );
      })}

      <style jsx>{`
        input {
          opacity: 0.4;
          background: none;
          border: none;
          font-size: 30px;
          outline: none;
          margin-bottom: 10px;
          transition: opacity 0.2s ease;
        }

        input:focus {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
