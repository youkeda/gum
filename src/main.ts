import Vue from 'vue';
import App from './App.vue';
import Gum from './index';

Vue.use(Gum);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
