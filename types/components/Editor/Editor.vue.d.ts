import { Vue } from "vue-property-decorator";
import { editor } from "monaco-editor/esm/vs/editor/editor.api";
export default class GumEditor extends Vue {
    private win;
    editor: editor.IStandaloneCodeEditor;
    $refs: {
        editor: HTMLElement;
    };
    mounted(): void;
    loadEditor(): void;
}
