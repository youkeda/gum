import Vue from 'vue';
import widget from './JSConsole.vue';
import ArrayType from './components/ArrayType.vue';
import StringType from './components/StringType.vue';
import UndefinedType from './components/UndefinedType.vue';
import NullType from './components/NullType.vue';
import NumberType from './components/NumberType.vue';
import ObjectType from './components/ObjectType.vue';
import FunctionType from './components/FunctionType.vue';
import BooleanType from './components/BooleanType.vue';
import ErrorType from './components/ErrorType.vue';
import PromiseType from './components/PromiseType.vue';
import Wrapper from './components/Wrapper.vue';

let installed = false;
// Declare install function executed by Vue.use()
export function install(vue: typeof Vue): void {
  if (installed) return;
  installed = true;
  vue.component(widget.name, widget);
  vue.component('jc-array', ArrayType);
  vue.component('jc-string', StringType);
  vue.component('jc-null', NullType);
  vue.component('jc-undefined', UndefinedType);
  vue.component('jc-number', NumberType);
  vue.component('jc-function', FunctionType);
  vue.component('jc-boolean', BooleanType);
  vue.component('jc-object', ObjectType);
  vue.component('jc-error', ErrorType);
  vue.component('jc-promise', PromiseType);
  vue.component('jc-wrapper', Wrapper);
}

export function parseWrapper(o: any) {
  if (!o._y_type) {
    if (Object.prototype.toString.apply(o) === '[object Array]') {
      let result: any[] = [];
      o.map((item: any) => {
        result.push(parseWrapper(item));
      });
      return result;
    }
    return o;
  }
  const yType = o._y_type;
  if (yType === 'undefined') {
    return undefined;
  } else if (yType === 'null') {
    return null;
  }

  if (
    yType === '[object Boolean]' ||
    yType === '[object Number]' ||
    yType === '[object String]' ||
    yType === '[object Error]' ||
    yType === '[object Function]'
  ) {
    return o.value;
  }

  if (yType === '[object Object]') {
    return hanldeObject(o);
  }

  if (yType === '[object Array]') {
    return handleArray(o);
  }
  if (Object.prototype.toString.apply(o.value) === '[object Array]') {
    return handleArray(o);
  }

  if (Object.prototype.toString.apply(o.value) === '[object Object]') {
    return hanldeObject(o);
  }

  return null;
}

function handleArray(raw: any) {
  let arrayO: any[] = [];
  if (raw.value) {
    raw.value.map((item: any) => {
      arrayO.push(parseWrapper(item));
    });
  }
  return arrayO;
}

function hanldeObject(raw: any) {
  let mapO: any = {};
  if (raw.value) {
    Object.keys(raw.value).map((key: any) => {
      mapO[key] = parseWrapper(raw.value[key]);
    });
  }
  return mapO;
}

// To allow use as module (npm/webpack/etc.) export component
export default {
  install
};
