import { Vue } from "vue-property-decorator";
import { ParserFunc } from "./parser";
export default class JSONTree extends Vue {
    data: any[];
    parser: ParserFunc;
    jtParser: ParserFunc;
    private matchs;
    mounted(): void;
    onDataChange(): void;
    initMatch(): void;
}
