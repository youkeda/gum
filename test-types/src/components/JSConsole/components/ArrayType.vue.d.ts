import { Vue } from 'vue-property-decorator';
export default class IDEA extends Vue {
    allowOpen: boolean;
    value: any[];
    shallow: boolean;
    open: boolean;
    private localOpen;
    mounted(): void;
    whichType(value: any): "jc-array" | "jc-string" | "jc-null" | "jc-undefined" | "jc-number" | "jc-function" | "jc-boolean" | "jc-object" | "jc-error" | "jc-promise" | "jc-wrapper" | "jc-set";
    toggle(e: any): void;
}
