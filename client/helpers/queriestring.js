export const makeObjString = obj => {
  const makeFieldString = (name, value) => {
    if (name === 'preferences' || name === 'settings') {
      const nestedObj = obj[name];
      return ` ${name}: { ${Object.keys(nestedObj).map(key => makeFieldString(key, nestedObj[key]))} }`;
    } else if (typeof value === 'number' || typeof value === 'boolean'){
      return ` ${name}: ${value}`;
    }
    return ` ${name}: "${value.replace(`'`, `''`)}"`;
  }
  return `{ ${Object.keys(obj).map(key => makeFieldString(key, obj[key]))}}`;
};
