import Vue from 'vue';
import widget from './JSConsole.vue';
import ArrayType from './components/ArrayType.vue';
import StringType from './components/StringType.vue';
import UndefinedType from './components/UndefinedType.vue';
import NullType from './components/NullType.vue';
import NumberType from './components/NumberType.vue';
import ObjectType from './components/ObjectType.vue';

let installed = false;
// Declare install function executed by Vue.use()
export function install(vue: typeof Vue): void {
  if (installed) return;
  installed = true;
  vue.component(widget.name, widget);
  vue.component('jc-array', ArrayType);
  vue.component('jc-string', StringType);
  vue.component('jc-null', NullType);
  vue.component('jc-undefined', UndefinedType);
  vue.component('jc-number', NumberType);
  vue.component('jc-object', ObjectType);
}

const plugin = {
  install
};

Vue.use(plugin);

// To allow use as module (npm/webpack/etc.) export component
export default widget;
