import { normalize, schema, denormalize } from 'normalizr';

import { Bit } from '../interfaces/bits';

const bit = new schema.Entity('bits');
const bits = new schema.Array(bit);
bit.define({ bits });

const bitsSchema = new schema.Entity('bits', { bits }, { idAttribute: '_id' });

export const normalizeBits = (bits: Bit[]) => normalize(bits, [bitsSchema]);
export const denormalizeBits = (result: any, entities: any) =>
  denormalize(result, [bitsSchema], entities);
