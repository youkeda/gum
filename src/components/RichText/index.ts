import Vue from 'vue';
// import 'bulma';
import RichText from './RichText.vue';

(<any>RichText).install = function(opts: any = {}) {
  Vue.component('YKDRichText', RichText);
};

export default RichText;
