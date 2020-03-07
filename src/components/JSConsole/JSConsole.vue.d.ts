import { Vue } from "vue-property-decorator";
export default class JSConsole extends Vue {
    data: any[];
    whichType(value: any): "jc-null" | "jc-boolean" | "jc-number" | "jc-string" | "jc-error" | "jc-object" | "jc-array" | "jc-undefined" | "jc-set" | "jc-promise" | "jc-function" | "jc-wrapper";
}
