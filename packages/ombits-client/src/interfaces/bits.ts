export interface Bit {
  _id: string;
  title: string;
  level: number;
  bits: Bit[];
  isComplete?: boolean;
}

interface NormalizedBit extends Omit<Bit, 'bits'> {
  bits: string[];
}

export interface NormalizedBitsObject {
  [id: string]: NormalizedBit;
}

export interface NormalizedBitsState {
  bits: NormalizedBitsObject;
  result: string[];
}
