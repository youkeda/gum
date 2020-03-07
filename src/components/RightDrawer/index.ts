import Vue from 'vue';

import RightDrawer from './RightDrawer.vue';

(<any>RightDrawer).install = function(opts: any = {}) {
  Vue.component('RightDrawer', RightDrawer);
};

export default RightDrawer;
