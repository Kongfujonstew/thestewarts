export const makeObjString = obj => {
  console.log('orig obj at makeObjString:', obj)
  let error = '';
  const makeFieldString = (name, value) => {
    if (name === 'time') {
      //coerce for event times, which are numbers fwr
      value = new Date(value).toISOString();
    };

    if (typeof value === 'number' && !name.includes('id')) {
      value = String(value);
    }

    if (typeof value === 'string' && name.includes('id')) {
      value = Number(value);
    }

    if (name === 'preferences' || name === 'settings') {
      // THIS deletes all ur settings or preferences if that field is empty on update
      value = value || '{}';
      console.log('name: ', name)
      console.log('value: ', value)
      console.log('typeof value: ', typeof value)
      if (typeof value === 'string') {
        try {
          value = JSON.parse(value);
        } catch(e) {
          error = e;
        }
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
    } else if (value === null || !value) {
      if (name.includes('id')) {
        return '';
      }
      console.log('doing a null or undefined value');
      return ` ${name}: ""`;
    } else if (typeof value === 'boolean' || value === 'false' || value === 'true'){
      console.log('doing a boolean')
      return ` ${name}: ${value}`;
    } else if (typeof value === 'number' || (name.includes('id') && !isNaN(Number(value)))) {
      console.log('doing a number on value: ', value)
      return ` ${name}: ${value}`;
    };
    console.log('doing a string on value: ', value)
    return ` ${name}: "${value ? value.replace(`'`, `''`) : ''}"`;
  };
  const result = `{ ${Object.keys(obj).map(key => makeFieldString(key, obj[key]))}}`;
  console.log('query string returning: ', error || result)
  return error || result;
};
