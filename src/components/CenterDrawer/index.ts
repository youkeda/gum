import Vue from 'vue';

import CenterDrawer from './CenterDrawer.vue';
const install = function(opts = {}) {
  Vue.component('CenterDrawer', CenterDrawer);
};

export default {
  install
};
