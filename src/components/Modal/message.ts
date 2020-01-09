import Vue, { VNode } from 'vue';

// 这里就是我们刚刚创建的那个静态组件
import Message from './Message.vue';
const noop = () => {};
// 定义弹出组件的函数 接收3个参数, 要显示的文本 类型 和 显示时间
function showMessage({
  confirm,
  message,
  iconUrl,
  type = 'success',
  duration = 1000
}: {
  message: string;
  type: string;
  duration: number;
  iconUrl?: string;
  confirm?: Function;
}) {
  const div = document.createElement('div');
  const el = document.createElement('div');
  div.appendChild(el);
  document.body.appendChild(div);

  new Vue({
    el: el,
    data() {
      return {
        iconUrl: iconUrl,
        message: message,
        visible: false,
        type: type,
        duration: duration
      };
    },
    mounted() {
      this.visible = true;
      this.message = message;
      this.iconUrl = iconUrl;
      this.type = type;
      this.duration = duration
    },
    render(createElement): VNode {
      return createElement(Message, {
        props: {
          message: this.message,
          iconUrl: this.iconUrl,
          visible: this.visible,
          type: this.type,
          duration: this.duration
        },
        on: {
          cancel: confirm ? confirm : noop
        }
      });
    }
  });
}

// // 注册为全局组件的函数
// function registerModal() {
//   // 将组件注册到 vue 的 原型链里去,
//   // 这样就可以在所有 vue 的实例里面使用 this.$toast()
//   Vue.prototype.$confirm = showConfirm
// }

// export default registerModal

export default showMessage;
