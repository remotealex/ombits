import React, { useReducer } from 'react';
import { Title, Wrapper } from 'om-ui';
import produce from 'immer';

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
      id: generateUUID(),
      title: 'Foo',
      level: 0,
      bits: [
        {
          id: generateUUID(),
          title: 'Foo1',
          level: 1,
          bits: [] as Bit[],
        },
        {
          id: generateUUID(),
          title: 'Foo2',
          level: 1,
          bits: [
            {
              id: generateUUID(),
              title: 'Poo',
              level: 2,
              bits: [] as Bit[],
            },
            {
              id: generateUUID(),
              title: 'Loo',
              level: 2,
              bits: [] as Bit[],
            },
          ],
        },
      ],
    },
    {
      id: generateUUID(),
      title: 'Bar',
      level: 0,
      bits: [] as Bit[],
    },
    {
      id: generateUUID(),
      title: 'Baz',
      level: 0,
      bits: [
        {
          id: generateUUID(),
          title: 'Baz2',
          level: 1,
          bits: [] as Bit[],
        },
      ],
    },
  ] as Bit[],
};

// Immer reducer
const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'updateTitle':
      draft.bits[action.payload.id].title = action.payload.title;
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

  // console.log(denormalizeBits(state.result, { bits: state.bits }));

  return (
    <section>
      <Wrapper>
        <Title as="h2" text="Morning routine" marginBottom={3} />
        <BitInputs state={state} dispatch={dispatch} bitIds={state.result} />
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
  state: any;
  dispatch: any;
}

const BitInputs: React.FC<Props> = ({ bitIds, state, dispatch }) => {
  const bits = bitIds.map(id => state.bits[id]);
  return (
    <div>
      {bits.map(bit => {
        return (
          <div key={bit.id} style={{ marginLeft: `${bit.level * 16}px` }}>
            <input
              style={{ color: 'black' }}
              value={bit.title}
              onChange={e => {
                const title = e.currentTarget.value;
                dispatch({
                  type: 'updateTitle',
                  payload: { id: bit.id, title },
                });
              }}
            />
            {bit.bits && (
              <BitInputs state={state} dispatch={dispatch} bitIds={bit.bits} />
            )}
          </div>
        );
      })}
    </div>
  );
};
