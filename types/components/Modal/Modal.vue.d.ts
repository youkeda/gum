import { Vue } from 'vue-property-decorator';
export default class Modal extends Vue {
    $refs: {
        modal: HTMLElement;
    };
    visible: boolean;
    appendToDom?: string;
    title: string;
    destroyOnClose: boolean;
    customClass?: string;
    beforeClose?: Function;
    needCloseBtn: boolean;
    closeOnClickModal: boolean;
    private closed;
    private key;
    visibleChange(): void;
    handleWrapperClick(): void;
    handleClose(): void;
    hide(cancel: boolean): void;
    appendTo(): void;
    afterEnter(): void;
    afterLeave(): void;
}
