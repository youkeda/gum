import { Vue } from 'vue-property-decorator';
export default class YKDModalHasBtns extends Vue {
    visible: boolean;
    appendToDom?: string;
    title: string;
    destroyOnClose: boolean;
    customClass?: string;
    closeOnClickModal: boolean;
    cancelTxt?: string;
    confirmTxt?: string;
    private localVisible;
    private closed;
    mounted(): void;
    visibleChange(): void;
    cancel(): void;
    confirm(): void;
}
