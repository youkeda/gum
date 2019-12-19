// import Vuetify, { VBtn } from 'vuetify/lib';
import Vue from "vue";
import GumEditor from "./components/Editor.vue";

/**
 * Fügt eine "install" function bei MLiveForce hinzu
 *
 * Weitere Infos:
 *      https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Packaging-Components-for-npm
 */
const GumEditorElements = {
  install(vue: typeof Vue): void {
    vue.component("GumEditor", GumEditor);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  // @ts-ignore
  window.Vue.use(GumEditorElements, {});
}

export { GumEditor };
export default GumEditorElements;
