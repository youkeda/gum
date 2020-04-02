import Vue from 'vue';
import Editor from './components/Editor';
import JSConsole from './components/JSConsole';
import JSONTree from './components/JSONTree';
import YKDModal from './components/Modal/index';
import YKDCenterDrawer from './components/CenterDrawer/index';
import YKDRightDrawer from './components/RightDrawer/index';
import YKDRichText from './components/RichText/index';
export { Editor, JSConsole, YKDModal, YKDRightDrawer, YKDCenterDrawer, YKDRichText };
declare const _default: {
    install: (opts?: {}) => void;
    Editor: {
        install: typeof import("./components/Editor").install;
    };
    JSConsole: typeof JSConsole;
    JSONTree: typeof JSONTree;
    YKDModal: typeof YKDModal;
    YKDCenterDrawer: typeof YKDCenterDrawer;
    YKDRightDrawer: typeof YKDRightDrawer;
    YKDRichText: import("vue").VueConstructor<Vue>;
};
export default _default;
