export const makeObjString = obj => `'${JSON.stringify(obj)}'`;

export const makeValues = items => Object.values(items).map(value => {
  if (typeof value === 'object') {
    return makeObjString(value);
  } else {
    return `'${value}', `.slice(0, -2);
  }
});

export const makeColumns = items => Object.keys(items);

export const makeSet = items => {
  // For preferences/ settings fields
  const makeKey = key => {
    if (typeof key === 'string') {
      return key;
    } else {
      return JSON.stringify(key);
    }
  }
  const keys = Object.keys(items);
  const set = keys.reduce((accumString, key) => accumString + `${key}='${makeKey(items[key])}', `, '').slice(0, -2);
  return set;
};
