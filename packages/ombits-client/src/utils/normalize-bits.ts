import { normalize, schema, denormalize } from 'normalizr';

import { Bit } from '../interfaces/bits';

interface BitWithTypeName extends Bit {
  __typename?: string;
}

const bit = new schema.Entity('bits', undefined, { idAttribute: '_id' });
const bits = new schema.Array(bit);
bit.define({ bits });

const bitsSchema = new schema.Entity('bits', { bits }, { idAttribute: '_id' });

export const normalizeBits = (bits: BitWithTypeName[]) =>
  normalize(bits, [bitsSchema]);

export const denormalizeBits = (
  result: any,
  entities: any,
): BitWithTypeName[] => denormalize(result, [bitsSchema], entities);
