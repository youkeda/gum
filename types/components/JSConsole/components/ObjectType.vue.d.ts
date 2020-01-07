import { Vue } from "vue-property-decorator";
export default class JCObjectType extends Vue {
    allowOpen: boolean;
    value: any[];
    shallow: boolean;
    open: boolean;
    type: string;
    displayName: string;
    private localOpen;
    private localDisplayName;
    private props;
    mounted(): void;
    init(): void;
    onDisplayNameChange(): void;
    onValueChange(): void;
    handleProps(): void;
    whichType(value: any): "jc-string" | "jc-number" | "jc-boolean" | "jc-set" | "jc-promise" | "jc-error" | "jc-undefined" | "jc-null" | "jc-array" | "jc-function" | "jc-object";
    toggle(e: any): void;
}
