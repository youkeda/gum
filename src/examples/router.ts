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
    },
    {
      path: '/rich-text',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/examples/rich-text/Index.vue')
    },
    {
      path: '/rightdraw',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/examples/drawer/Drawer.vue')
    }
  ]
});
