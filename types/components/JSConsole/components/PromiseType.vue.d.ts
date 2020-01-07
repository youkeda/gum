import { Vue } from "vue-property-decorator";
export default class JCPromiseType extends Vue {
    allowOpen: boolean;
    value: any;
    shallow: boolean;
    open: boolean;
    private localOpen;
    private promiseValue;
    private status;
    whichType(value: any): "jc-string" | "jc-number" | "jc-boolean" | "jc-set" | "jc-promise" | "jc-error" | "jc-undefined" | "jc-null" | "jc-array" | "jc-function" | "jc-object";
    mounted(): void;
    toggle(e: any): void;
    init(): Promise<void>;
    updatePromiseState(): Promise<{
        promiseValue: any;
        status: string;
    }>;
}
