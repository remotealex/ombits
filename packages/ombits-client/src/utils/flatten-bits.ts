import { Bit } from '../interfaces/bits';

export const flattenBits = (bits: Bit[], idx = 1) => {
  const allBits = [] as Bit[];

  bits.forEach(bit => {
    allBits.push(bit);
    if (bit.bits.length > 0) {
      allBits.push(...flattenBits(bit.bits, idx + 1));
    }
  });

  return allBits;
};
