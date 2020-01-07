import { Vue } from "vue-property-decorator";
export default class JSConsole extends Vue {
    data: any[];
    whichType(value: any): "jc-string" | "jc-number" | "jc-boolean" | "jc-set" | "jc-promise" | "jc-error" | "jc-undefined" | "jc-null" | "jc-array" | "jc-function" | "jc-object";
}
