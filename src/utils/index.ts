export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanEmpty = (object: any) => {
  const copy = { ...object };
  Object.keys(copy).forEach((key) => {
    const value = copy[key];
    if (isFalsy(value)) {
      delete copy[key];
    }
  });
  return copy;
};
