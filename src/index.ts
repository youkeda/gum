import Vue from 'vue';
import Editor from './components/Editor';
import JSConsole from './components/JSConsole';
import JSONTree from './components/JSONTree';
import YKDModal from './components/Modal/index';
import YKDCenterDrawer from './components/CenterDrawer/index';
import YKDRightDrawer from './components/RightDrawer/index';
import YKDRichText from './components/RichText/index';

const install = function(opts = {}) {
  Vue.use(Editor);
  Vue.use(<any>JSConsole);
  Vue.use(<any>YKDModal);
  Vue.use(<any>YKDCenterDrawer);
  Vue.use(<any>YKDRightDrawer);
  Vue.use(<any>JSONTree);
  Vue.use(<any>YKDRichText);
};

export {
  Editor,
  JSConsole,
  YKDModal,
  YKDRightDrawer,
  YKDCenterDrawer,
  YKDRichText
};

export default {
  install,
  Editor,
  JSConsole,
  JSONTree,
  YKDModal,
  YKDCenterDrawer,
  YKDRightDrawer,
  YKDRichText
};
