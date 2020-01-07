import Vue from 'vue';
// import 'bulma';
import widget from './Editor.vue';

let installed = false;
// Declare install function executed by Vue.use()
export function install(vue: typeof Vue): void {
  if (installed) return;
  installed = true;
  vue.component(widget.name, widget);
}

// To allow use as module (npm/webpack/etc.) export component
export default {
  install
};
