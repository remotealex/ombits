import { NormalizedBitsState } from '../interfaces/bits';

// Helper function which recursively deletes the children for
// a given bit ID
export const deleteChildren = (draft: NormalizedBitsState, bId: string) => {
  console.log(bId);
  // Find the children if there are any
  const children = Object.values(draft.bits).filter(b =>
    draft.bits[bId].bits.includes(b._id),
  );
  console.log('children', JSON.stringify(children));

  // Delete all of the children and then call it again for their children
  children.forEach(child => {
    deleteChildren(draft, child._id);
    delete draft.bits[child._id];
  });
};
