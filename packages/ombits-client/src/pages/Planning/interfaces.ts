import { Bit } from '../../interfaces/bits';

interface NormalizedBit extends Omit<Bit, 'bits'> {
  bits: string[];
}

export interface NormalizedBitsObject {
  [id: string]: NormalizedBit;
}

export interface State {
  bits: NormalizedBitsObject;
  result: string[];
}

export interface Payload {
  _id: string;
  bitAboveId: string;
  level: number;
  noFocus?: boolean;
  numBits: number;
  parentBitId: string;
  title?: string;
}
