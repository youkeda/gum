export function stringify(o: any, visited?: any): any {
  let i,
    vi,
    type = '',
    parts = [];
  visited = visited || [];

  // Get out fast with primitives that don't like toString
  if (o === null) {
    return {
      _y_type: 'null',
      value: null
    };
  }
  if (typeof o === 'undefined') {
    return {
      _y_type: 'undefined',
      value: undefined
    };
  }

  // Determine the type
  try {
    type = {}.toString.call(o);
  } catch (e) {
    type = '[object Object]';
  }

  // Handle the primitive types
  if (
    type === '[object Number]' ||
    type === '[object Boolean]' ||
    type === '[object String]' ||
    type === '[object Set]' ||
    type === '[object Map]' ||
    type === '[object Error]'
  ) {
    return {
      _y_type: type,
      value: o
    };
  }

  if (type == '[object Function]') {
    return {
      _y_type: type,
      value: o.toString()
    };
  }

  // Check for circular references
  for (vi = 0; vi < visited.length; vi++) {
    if (o === visited[vi]) {
      // Notify the user that a circular object was found and, if available,
      // show the object's outerHTML (for body and elements)
      return {
        _y_type: 'circular',
        value: ''
      };
    }
  }

  // Remember that we visited this object
  visited.push(o);

  // Stringify each member of the array
  if (type === '[object Array]') {
    for (i = 0; i < o.length; i++) {
      parts.push(stringify(o[i], visited));
    }
    return {
      _y_type: '[object Array]',
      value: parts
    };
  }

  // Fake array – very tricksy, get out quickly
  if (type.match(/Array/)) {
    return {
      _y_type: 'Array',
      value: 'Array'
    };
  }

  let object: any = {};
  let names = [];
  try {
    for (i in o) {
      names.push(i);
    }
  } catch (e) {
    //@ts-ignore
  }

  names.sort();
  for (i = 0; i < names.length; i++) {
    try {
      object[names[i]] = stringify(o[names[i]], visited);
    } catch (e) {
      //@ts-ignore
    }
  }

  // Return the indented object with new lines
  return {
    _y_type: (o.constructor && o.constructor.name) || '[object Object]',
    value: object
  };
}
