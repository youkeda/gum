import { Vue } from "vue-property-decorator";
export default class JSConsole extends Vue {
    data: any[];
    whichType(value: any): "jc-array" | "jc-string" | "jc-null" | "jc-undefined" | "jc-number" | "jc-function" | "jc-boolean" | "jc-object" | "jc-error" | "jc-promise" | "jc-wrapper" | "jc-set";
}
