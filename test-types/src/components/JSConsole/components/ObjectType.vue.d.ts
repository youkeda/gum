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
    whichType(value: any): "jc-array" | "jc-string" | "jc-null" | "jc-undefined" | "jc-number" | "jc-function" | "jc-boolean" | "jc-object" | "jc-error" | "jc-promise" | "jc-wrapper" | "jc-set";
    toggle(e: any): void;
}
