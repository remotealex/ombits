export interface Payload {
  _id: string;
  level: number;
  newCompleteState?: boolean;
  noFocus?: boolean;
  numBits: number;
  parentBitId: string;
  title?: string;
}
