import { Vue } from 'vue-property-decorator';
export default class JTBsonType extends Vue {
    value: string;
    innerType: string;
    yKey: string;
    depth: number;
    readonly rKey: string;
    readonly isKey: boolean;
    readonly bsonClass: any;
    mounted(): void;
    readonly formatValue: string;
    readonly type: string;
}
