import { Vue } from 'vue-property-decorator';
export default class IDEA extends Vue {
    allowOpen: boolean;
    value: any[];
    shallow: boolean;
    open: boolean;
    private localOpen;
    mounted(): void;
    whichType(value: any): "jc-null" | "jc-boolean" | "jc-number" | "jc-string" | "jc-error" | "jc-object" | "jc-array" | "jc-undefined" | "jc-set" | "jc-promise" | "jc-function" | "jc-wrapper";
    toggle(e: any): void;
}
