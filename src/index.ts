import Vue from 'vue';
import Editor from './components/Editor';
import JSConsole from './components/JSConsole';
import YKDModal from './components/Modal/index';
import YKDCenterDrawer from './components/CenterDrawer/index';
import YKDRightDrawer from './components/RightDrawer/index';

const install = function(opts = {}) {
  Vue.use(Editor);
  Vue.use(<any>JSConsole);
  Vue.use(<any>YKDModal);
  Vue.use(<any>YKDCenterDrawer);
  Vue.use(<any>YKDRightDrawer);
  // Vue.use(modalRegistry);s
};

export { Editor, JSConsole, YKDModal, YKDRightDrawer, YKDCenterDrawer };

export default {
  install,
  Editor,
  JSConsole,
  YKDModal,
  YKDCenterDrawer,
  YKDRightDrawer
};
