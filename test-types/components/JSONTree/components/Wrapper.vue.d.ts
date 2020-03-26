import { Vue } from "vue-property-decorator";
export default class JCTypeWrapper extends Vue {
    type: string;
    depth: number;
    keyClass: string;
    valueClass: string;
    typeClass: string;
    readonly keyStyle: string;
}
