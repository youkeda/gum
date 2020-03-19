import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tree',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/examples/tree/Index.vue')
    },
    {
      path: '/json-tree',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/examples/json-tree/Index.vue')
    }
  ]
});
