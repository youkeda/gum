import Vue from 'vue';
import Editor from './components/Editor';
import JSConsole from './components/JSConsole';
import JSONTree from './components/JSONTree';
import YKDModal from './components/Modal/index';
import YKDCenterDrawer from './components/CenterDrawer/index';
import YKDRightDrawer from './components/RightDrawer/index';

const install = function(opts = {}) {
  Vue.use(Editor);
  Vue.use(<any>JSConsole);
  Vue.use(<any>YKDModal);
  Vue.use(<any>YKDCenterDrawer);
  Vue.use(<any>YKDRightDrawer);
  Vue.use(<any>JSONTree);
};

export { Editor, JSConsole, YKDModal, YKDRightDrawer, YKDCenterDrawer };

export default {
  install,
  Editor,
  JSConsole,
  JSONTree,
  YKDModal,
  YKDCenterDrawer,
  YKDRightDrawer
};
