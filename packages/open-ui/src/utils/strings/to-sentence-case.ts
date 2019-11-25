export const toSentenceCase = (string?: string | null) => {
  if (!string) {
    return '';
  }
  return string
    .toLowerCase()
    .split('')
    .map((s, idx) => (idx === 0 ? s.toUpperCase() : s))
    .join('');
};
