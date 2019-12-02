import { Bit } from '../../interfaces/bits';

interface NormalizedBit extends Omit<Bit, 'bits'> {
  bits: string[];
}

export interface State {
  bits: {
    [id: string]: NormalizedBit;
  };
  result: string[];
}

export interface Payload {
  bitAboveId: string;
  id: string;
  level: number;
  noFocus?: boolean;
  numBits: number;
  parentBitId: string;
  title?: string;
}
