import { ParserFunc } from '../parser';
import Match from '../model/match';

const COMPONENT_MAP: any = {
  '[object Object]': 'jt-object',
  '[object Boolean]': 'jt-boolean',
  '[object String]': 'jt-string',
  '[object Array]': 'jt-array',
  '[object Number]': 'jt-number'
};
export default function witch(
  key: any,
  value: any,
  parser?: ParserFunc
): Match {
  if (parser) {
    return parser(key);
  }

  let type: string = '';
  try {
    type = {}.toString.call(value);
  } catch (e) {
    type = '[object Object]';
  }
  return {
    type: COMPONENT_MAP[type]
  };
}
