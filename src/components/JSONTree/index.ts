import Vue from 'vue';
import JSONTree from './JSONTree.vue';
import ArrayType from './components/ArrayType.vue';
import StringType from './components/StringType.vue';
import NumberType from './components/NumberType.vue';
import ObjectType from './components/ObjectType.vue';
import DateType from './components/DateType.vue';
import BooleanType from './components/BooleanType.vue';
import BsonType from './components/BsonType.vue';
import Wrapper from './components/Wrapper.vue';

let installed = false;
(<any>JSONTree).install = function(vue: typeof Vue): void {
  if (installed) return;
  installed = true;
  vue.component('json-tree', JSONTree);
  vue.component('jt-array', ArrayType);
  vue.component('jt-string', StringType);
  vue.component('jt-number', NumberType);
  vue.component('jt-boolean', BooleanType);
  vue.component('jt-object', ObjectType);
  vue.component('jt-date', DateType);
  vue.component('jt-bson', BsonType);
  vue.component('jt-wrapper', Wrapper);
};

export default JSONTree;
