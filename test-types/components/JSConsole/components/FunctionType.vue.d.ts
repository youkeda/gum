import { Vue } from "vue-property-decorator";
export default class JCFunctionType extends Vue {
    allowOpen: boolean;
    value: any;
    shallow: boolean;
    open: boolean;
    private localOpen;
    private code;
    private object;
    private sig;
    mounted(): void;
    onOpenWatch(): void;
}
