import Vue from "vue";
import GumEditor from "./components/Editor.vue";

const install = function(opts = {}) {
  Vue.component(GumEditor.name, GumEditor)
}
export default {
  install,
  GumEditor
}


