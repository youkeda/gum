import Vue from 'vue';
import App from './App.vue';
import { install } from './components/JSConsole/index';

install(Vue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
