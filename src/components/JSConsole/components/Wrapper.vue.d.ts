import { Vue } from "vue-property-decorator";
export default class JCTypeWrapper extends Vue {
    value: any;
    shallow: boolean;
    allowOpen: boolean;
    open: boolean;
    private type;
    private sig;
    mounted(): void;
    onValueChange(): void;
    initType(): void;
}
