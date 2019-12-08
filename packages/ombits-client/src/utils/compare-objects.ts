// Dead simple deep object comparison
export const compareObjects = (a: any, b: any) =>
  JSON.stringify(a) === JSON.stringify(b);
