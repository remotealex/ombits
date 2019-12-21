import { NormalizedBitsState } from '../interfaces/bits';

// Helper function which recursively checks the parents
// of the given bitId and marks them as incomplete if any of
// it's children have been incomplete
export const resetParents = (draft: NormalizedBitsState, bId: string) => {
  const bits = Object.values(draft.bits);

  // Find the parent if there is one
  const parent = bits.find(b => b.bits.includes(bId));
  if (parent) {
    // See if any of the children are incomplete
    const incompleteSiblings = bits.filter(
      b => parent.bits.includes(b._id) && !b.isComplete,
    );
    if (incompleteSiblings.length === 0) {
      return;
    }

    // If any of the sibling bits are now incomplete, mark the
    // parent as incomplete
    draft.bits[parent._id].isComplete = false;

    // Call it on the parent ID to make sure we stay in sync
    resetParents(draft, parent._id);
  }
};
