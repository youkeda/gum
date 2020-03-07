import { Vue } from "vue-property-decorator";
export default class JCPromiseType extends Vue {
    allowOpen: boolean;
    value: any;
    shallow: boolean;
    open: boolean;
    private localOpen;
    private promiseValue;
    private status;
    whichType(value: any): "jc-null" | "jc-boolean" | "jc-number" | "jc-string" | "jc-error" | "jc-object" | "jc-array" | "jc-undefined" | "jc-set" | "jc-promise" | "jc-function" | "jc-wrapper";
    mounted(): void;
    toggle(e: any): void;
    init(): Promise<void>;
    updatePromiseState(): Promise<{
        promiseValue: any;
        status: string;
    }>;
}
