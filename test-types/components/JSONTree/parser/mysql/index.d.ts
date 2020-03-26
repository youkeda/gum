import Field from '../../model/field';
export default function parser(key: string, schema: Field[]): {
    type: string;
    innerType?: string;
};
