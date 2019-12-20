import Vue from "vue";

const requireComponent = require.context(
  "./components/",
  true,
  /index\.ts$/
  //找到components文件夹下以.vue命名的文件
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const component = componentConfig.default || componentConfig;
  Vue.component(component.name, component);
});