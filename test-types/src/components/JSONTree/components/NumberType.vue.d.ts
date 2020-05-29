import { Vue } from "vue-property-decorator";
export default class JSNumberType extends Vue {
    value: number;
    yKey: string;
    innerType: string;
    depth: number;
    readonly rKey: string;
    readonly type: string;
}
