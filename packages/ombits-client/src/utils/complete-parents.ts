import { NormalizedBitsState } from '../interfaces/bits';

// Helper function which recursively checks the parents
// of the given bitId and marks it as complete if all of
// it's children have been completed
export const completeParents = (draft: NormalizedBitsState, bId: string) => {
  const bits = Object.values(draft.bits);

  // Find the parent if there is one
  const parent = bits.find(b => b.bits.includes(bId));
  if (parent) {
    // See if all the children are complete now
    const incompleteSiblings = bits.filter(
      b => parent.bits.includes(b._id) && !b.isComplete,
    );
    if (incompleteSiblings.length > 0) {
      return;
    }

    // If all the sibling bits are now complete, mark the
    // parent as complete too!
    draft.bits[parent._id].isComplete = true;

    // Call it again on the parent to complete that too if needed
    completeParents(draft, parent._id);
  }
};
