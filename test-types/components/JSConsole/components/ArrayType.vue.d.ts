import { Vue } from 'vue-property-decorator';
export default class IDEA extends Vue {
    allowOpen: boolean;
    value: any[];
    shallow: boolean;
    open: boolean;
    private localOpen;
    mounted(): void;
    whichType(value: any): "jc-string" | "jc-number" | "jc-boolean" | "jc-set" | "jc-promise" | "jc-error" | "jc-undefined" | "jc-null" | "jc-array" | "jc-function" | "jc-wrapper" | "jc-object";
    toggle(e: any): void;
}
