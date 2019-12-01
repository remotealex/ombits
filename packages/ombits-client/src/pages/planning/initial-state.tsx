import { Bit } from '../../interfaces/bits';
// import { generateUUID } from '../../utils/generate-uuid';

export const initialState = {
  bits: [
    {
      //   id: generateUUID(),
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
