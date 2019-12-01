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
  id: string;
  level: number;
  bitAboveId: string;
  parentBitId: string;
  title?: string;
}
