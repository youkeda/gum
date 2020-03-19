const COMPONENT_MAP: any = {
  '[object Object]': 'jt-object',
  '[object Boolean]': 'jt-boolean',
  '[object String]': 'jt-string',
  '[object Array]': 'jt-array',
  '[object Number]': 'jt-number'
};
export default function witch(value: any): string {
  let type = '';
  try {
    type = {}.toString.call(value);
  } catch (e) {
    type = '[object Object]';
  }

  return COMPONENT_MAP[type];
}
