import { Vue } from "vue-property-decorator";
export default class JCPromiseType extends Vue {
    allowOpen: boolean;
    value: any;
    shallow: boolean;
    open: boolean;
    private localOpen;
    private promiseValue;
    private status;
    whichType(value: any): "jc-array" | "jc-string" | "jc-null" | "jc-undefined" | "jc-number" | "jc-function" | "jc-boolean" | "jc-object" | "jc-error" | "jc-promise" | "jc-wrapper" | "jc-set";
    mounted(): void;
    toggle(e: any): void;
    init(): Promise<void>;
    updatePromiseState(): Promise<{
        promiseValue: any;
        status: string;
    }>;
}
