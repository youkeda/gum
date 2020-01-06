function whichType(value: any) {
  let type = '[object Object]';
  try {
    type = {}.toString.call(value);
  } catch (e) {
    // only happens when typeof is protected (...randomly)
  }

  if (type === '[object String]') {
    return 'jc-string';
  }

  if (type === '[object Number]') {
    return 'jc-number';
  }

  if (type === '[object Boolean]') {
    return 'jc-boolean';
  }

  if (type === '[object Set]' || type === '[object Map]') {
    return 'jc-set';
  }

  if (type === '[object Promise]') {
    return 'jc-promise';
  }

  if (value instanceof Error || type === '[object Error]') {
    return 'jc-error';
  }

  if (value === undefined) {
    return 'jc-undefine';
  }

  if (value === null) {
    return 'jc-null';
  }

  if (type === '[object Array]') {
    return 'jc-array';
  }

  if (type === '[object Function]') {
    return 'jc-function';
  }

  // TODO DOM nodes, etc.

  // everything is eventually an object!
  return 'jc-object';
}

export default whichType;
