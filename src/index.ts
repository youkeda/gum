import Vue from "vue";
import Editor from "./component/Editor.vue";
import { VueConstructor } from "vue/types/umd";

interface Component {
  [key: string]: VueConstructor;
}
const Components: Component = {
  Editor
};
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});
export default Components;
