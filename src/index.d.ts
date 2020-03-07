import JSConsole from './components/JSConsole';
import Modal from './components/Modal/index';
import YKDCenterDrawer from './components/CenterDrawer/index';
import YKDRightDrawer from './components/RightDrawer/index';
declare const _default: {
    install: (opts?: {}) => void;
    Editor: {
        install: typeof import("./components/Editor").install;
    };
    JSConsole: typeof JSConsole;
    Modal: typeof Modal;
    YKDCenterDrawer: typeof YKDCenterDrawer;
    YKDRightDrawer: typeof YKDRightDrawer;
};
export default _default;
