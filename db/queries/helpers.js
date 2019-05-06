export const makeValues = items => Object.values(items).map(value => `'${value}',`.slice(0, -1));
export const makeColumns = items => Object.keys(items);
export const makeSet = items => {
  const keys = Object.keys(items);
  const set = keys.reduce((accumString, key) => accumString + `${key}='${items[key]}', `, '').slice(0, -2);
  return set;
};
