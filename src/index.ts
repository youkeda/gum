import Vue from 'vue';
import Editor from './components/Editor';
import JSConsole from './components/JSConsole';
import Modal from './components/Modal/index';
import YKDCenterDrawer from './components/CenterDrawer/index';
import YKDRightDrawer from './components/RightDrawer/index';

const install = function(opts = {}) {
  Vue.use(Editor);
  Vue.use(JSConsole);
  Vue.use(Modal);
  Vue.use(<any>YKDCenterDrawer);
  Vue.use(<any>YKDRightDrawer);
  // Vue.use(modalRegistry);s
};

export default {
  install,
  Editor,
  JSConsole,
  Modal,
  YKDCenterDrawer,
  YKDRightDrawer
};
