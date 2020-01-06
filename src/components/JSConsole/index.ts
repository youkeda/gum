import Vue from 'vue';
import widget from './JSConsole.vue';
import ArrayType from './components/ArrayType.vue';
import StringType from './components/StringType.vue';

let installed = false;
// Declare install function executed by Vue.use()
export function install(vue: typeof Vue): void {
  if (installed) return;
  installed = true;
  vue.component(widget.name, widget);
  vue.component('jc-array', ArrayType);
  vue.component('jc-string', StringType);
}

const plugin = {
  install
};

Vue.use(plugin);

// To allow use as module (npm/webpack/etc.) export component
export default widget;
