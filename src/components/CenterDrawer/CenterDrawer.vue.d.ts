import { Vue } from "vue-property-decorator";
export default class CenterDrawer extends Vue {
    private visible?;
    private title?;
    private type?;
    private isShow;
    mounted(): Promise<void>;
    showModal(): void;
    handleCancel(): void;
}
