import { Vue } from "vue-property-decorator";
import { ParserFunc } from "./parser";
export default class JSONTree extends Vue {
    data: any[];
    parser?: ParserFunc;
    jtParser?: ParserFunc;
    private oWidth;
    jtWidth: any;
    private matchs;
    private isDragHeader;
    mounted(): void;
    onDataChange(): void;
    initMatch(): void;
    onHeaderDrag(e: any): void;
}
