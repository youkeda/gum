import { Vue } from "vue-property-decorator";
import * as monaco from 'monaco-editor';
export default class GumEditor extends Vue {
    editor: monaco.editor.IStandaloneCodeEditor;
    $refs: {
        editor: HTMLElement;
    };
    mounted(): void;
}
