import { Vue } from "vue-property-decorator";
export default class JTStringType extends Vue {
    value: string;
    innerType: string;
    yKey: string;
    depth: number;
    readonly rKey: string;
    readonly isKey: boolean;
    readonly emptyValue: string;
    readonly formatValue: string;
    readonly type: string;
}
