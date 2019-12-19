import Vue from "vue";
import GumEditor from "./components/Editor.vue";
/**
 * Fügt eine "install" function bei MLiveForce hinzu
 *
 * Weitere Infos:
 *      https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Packaging-Components-for-npm
 */
declare const GumEditorElements: {
    install(vue: import("vue").VueConstructor<Vue>): void;
};
export { GumEditor };
export default GumEditorElements;
