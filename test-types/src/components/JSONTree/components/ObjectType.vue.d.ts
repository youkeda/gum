import { Vue } from 'vue-property-decorator';
import { ParserFunc } from '../parser';
export default class JCObjectType extends Vue {
    value: any;
    yKey: string;
    depth: number;
    jtParser: ParserFunc;
    private localOpen;
    private matchs;
    readonly keyTxt: any;
    readonly yValue: string;
    expand(): void;
    mounted(): void;
    onDataChange(): void;
    initMatch(): void;
}
