// Create a valid ObjectId
export const generateId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const oid =
    timestamp +
    'xxxxxxxxxxxxxxxx'
      .replace(/[x]/g, _ => ((Math.random() * 16) | 0).toString(16))
      .toLowerCase();

  return oid;
};
