import MYSQL_TYPE from './type';
import Field from '../../model/field';
export default function parser(
  key: string,
  schema: Field[]
): { type: string; innerType?: string } {
  if (!key) {
    return {
      type: 'jt-object',
    };
  }
  key = key.replace(/<%[\s\S].*?%>/g, '');
  console.log('key', key);
  for (let i = 0; i < schema.length; i++) {
    if (schema[i].name === key) {
      return MYSQL_TYPE[schema[i].type];
    }
  }
  return {
    type: 'jt-string',
  };
}
