import { Vue } from "vue-property-decorator";
export default class JTStringType extends Vue {
    value: string;
    innerType: string;
    yKey: string;
    depth: number;
    readonly type: string;
}
