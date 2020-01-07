import { Vue } from "vue-property-decorator";
import { editor } from "monaco-editor/esm/vs/editor/editor.api";
export default class GumEditor extends Vue {
    private win;
    editor: editor.IStandaloneCodeEditor;
    actionBtnStatus: any;
    $refs: {
        editor: HTMLElement;
    };
    mounted(): void;
    getActionBtnStatus(item: string): any;
    onActionBtnClick(item: string): void;
}
