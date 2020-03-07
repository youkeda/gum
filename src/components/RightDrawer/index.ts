import Vue from 'vue';

import RightDrawer from './RightDrawer.vue';
const install = function(opts = {}) {
  Vue.component('RightDrawer', RightDrawer);
};

export default {
  install
};
