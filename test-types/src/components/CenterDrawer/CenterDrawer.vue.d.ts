import { Vue } from "vue-property-decorator";
export default class CenterDrawer extends Vue {
    private visible;
    private title?;
    private type?;
    private isShow;
    private localVisible;
    mounted(): Promise<void>;
    onVisibleChange(): void;
    showModal(): void;
    handleCancel(): void;
}
