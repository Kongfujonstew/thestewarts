export const makeObjString = obj => {
  const makeFieldString = (name, value) => {
    if (name === 'preferences' || name === 'settings') {
      value = value || '{}';
      console.log('name: ', name)
      console.log('value: ', value)
      console.log('typeof value: ', typeof value)
      if (typeof value === 'string') {
        value = JSON.parse(value);
      }
      // const nestedObj = JSON.parse(obj[name]);
      // if (!nestedObj) return '';
      // console.log('nestedObj sts: ', nestedObj)
      // console.log('type of nestedObj: ', typeof nestedObj)
      const keys = Object.keys(value).filter(key => !!value[key] && !!isNaN(Number(value[key])))
      console.log('keys: ', keys)
      const nestedResult = ` ${name}: { ${keys.map(key => makeFieldString(key, value[key]))} }`;
      console.log('nestedResult: ', nestedResult)
      return nestedResult;
    } else if (typeof value === 'boolean'){
      return ` ${name}: ${value}`;
    } else if (typeof value === 'number') {
      return ` ${name}: "${value}"`;
    }
    return ` ${name}: "${value ? value.replace(`'`, `''`) : ''}"`;
  }
  console.log('result: ', result)
  const result = `{ ${Object.keys(obj).map(key => makeFieldString(key, obj[key]))}}`;
  return result;
};
