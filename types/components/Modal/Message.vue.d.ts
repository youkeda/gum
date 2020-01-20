import { Vue } from 'vue-property-decorator';
export default class YKDMessage extends Vue {
    visible: boolean;
    appendToDom?: string;
    destroyOnClose: boolean;
    customClass?: string;
    iconUrl: string;
    message?: string;
    type: string;
    duration: number;
    private localVisible;
    private icon;
    mounted(): void;
    readonly typeicon: string;
    visibleChange(): void;
    cancel(): void;
}
