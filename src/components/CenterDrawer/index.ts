import Vue from 'vue';

import CenterDrawer from './CenterDrawer.vue';

(<any>CenterDrawer).install = function(opts: any = {}) {
  Vue.component('YKDCenterDrawer', CenterDrawer);
};

export default CenterDrawer;
