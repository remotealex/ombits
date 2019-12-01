export const focusEl = (id: string) => {
  // Make sure the element is in the DOM then focus it
  setTimeout(() => {
    const el = document.getElementById(id);
    el && el.focus();
  }, 10);
};
