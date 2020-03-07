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
    whichType(value: any): "jc-null" | "jc-boolean" | "jc-number" | "jc-string" | "jc-error" | "jc-object" | "jc-array" | "jc-undefined" | "jc-set" | "jc-promise" | "jc-function" | "jc-wrapper";
    toggle(e: any): void;
}
