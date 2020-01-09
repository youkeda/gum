import Vue from 'vue';
import Editor from './components/Editor';
import JSConsole from './components/JSConsole';
import Modal from './components/Modal/index'
// import modalRegistry from './components/Modal/modal'

const install = function(opts = {}) {
  Vue.use(Editor);
  Vue.use(JSConsole);
  Vue.use(Modal);
  // Vue.use(modalRegistry);
};

export default {
  install,
  Editor,
  JSConsole,
  Modal,
  // modalRegistry
};
