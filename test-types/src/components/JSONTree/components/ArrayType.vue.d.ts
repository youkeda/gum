import { Vue } from "vue-property-decorator";
import { ParserFunc } from "../parser";
export default class JTArrayType extends Vue {
    value: any[];
    yKey: string;
    depth: number;
    jtParser: ParserFunc;
    private localOpen;
    private matchs;
    readonly rKey: string;
    readonly yValue: string;
    expand(): void;
    mounted(): void;
    onDataChange(): void;
    initMatch(): void;
}
