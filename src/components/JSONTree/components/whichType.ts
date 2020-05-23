import { ParserFunc } from '../parser';
import Match from '../model/match';

const COMPONENT_MAP: any = {
  '[object Object]': 'jt-object',
  '[object Boolean]': 'jt-boolean',
  '[object String]': 'jt-string',
  '[object Array]': 'jt-array',
  '[object Number]': 'jt-number',
};

const MONGODB_CONSTRUCT_NAMES: any = [
  'Int32',
  'ObjectId',
  'Double',
  'String',
  'Undefined',
  'Boolean',
  'Date',
  'Null',
  'Symbol',
  'Int64',
  'Long',
];
export default function witch(
  key: any,
  value: any,
  parser?: ParserFunc
): Match {
  // 优先自定义parser
  if (parser) {
    return parser(key);
  }

  let type: string = '';
  try {
    type = {}.toString.call(value);
  } catch (e) {
    type = '[object Object]';
  }

  // 此处hook一个mongodb的处理逻辑
  if (type === '[object Object]') {
    console.log(key, value);
    if (MONGODB_CONSTRUCT_NAMES.indexOf(value.constructor.name) !== -1) {
      return {
        type: 'jt-bson',
      };
    }
  }
  return {
    type: COMPONENT_MAP[type],
  };
}
