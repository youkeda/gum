import Vue from 'vue';
import Editor from './components/Editor';
import JSConsole from './components/JSConsole';

const install = function(opts = {}) {
  Vue.use(Editor);
  Vue.use(JSConsole);
};

export default {
  install,
  Editor,
  JSConsole
};
