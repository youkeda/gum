import { Vue } from 'vue-property-decorator';
export default class YKDConfirm extends Vue {
    visible: boolean;
    appendToDom?: string;
    title: string;
    desc: string;
    destroyOnClose: boolean;
    customClass?: string;
    closeOnClickModal: boolean;
    cancelTxt?: string;
    confirmTxt?: string;
    private localVisible;
    mounted(): void;
    visibleChange(): void;
    cancel(): void;
    confirm(): void;
}
