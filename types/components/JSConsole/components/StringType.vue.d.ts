import { Vue } from 'vue-property-decorator';
export default class JSStringType extends Vue {
    value: string;
    html: boolean;
    bare: boolean;
    shallow: boolean;
    private str;
    mounted(): void;
    onValueChange(): void;
    onShallowChange(): void;
    initMutliLine(): void;
}
