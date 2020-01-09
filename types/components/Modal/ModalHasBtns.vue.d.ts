import { Vue } from 'vue-property-decorator';
export default class ModalHasBtns extends Vue {
    visible: boolean;
    appendToDom?: string;
    title: string;
    destroyOnClose: boolean;
    customClass?: string;
    closeOnClickModal: boolean;
    private localVisible;
    private closed;
    mounted(): void;
    visibleChange(): void;
    cancel(): void;
    confirm(): void;
}
