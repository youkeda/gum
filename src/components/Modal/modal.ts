import Vue, { VNode } from 'vue'

// 这里就是我们刚刚创建的那个静态组件
import Confirm from './Confirm.vue'
const noop = () => {}
// 定义弹出组件的函数 接收3个参数, 要显示的文本 类型 和 显示时间
function showConfirm({
  title,
  cancel,
  desc,
  confirm,
  cancelTxt,
  confirmTxt
}: {
  title: string
  desc: string
  cancel?: Function
  confirm?: Function
  cancelTxt?:string
  confirmTxt?:string
}) {
  const div = document.createElement('div')
  const el = document.createElement('div')
  div.appendChild(el)
  document.body.appendChild(div)

  const confirmDialogProps = {
    props: {
      visible: true,
      title: title
    }
  }

  const props: any = {}

  new Vue({
    el: el,
    data() {
      return {
        title: title,
        desc: desc,
        visible: false,
        confirmTxt: confirmTxt,
        cancelTxt: cancelTxt
      }
    },
    mounted() {
      this.visible = true
      this.title = title
      this.desc = desc
    },
    render(createElement): VNode {
      return createElement(Confirm, {
        props: {
          title: this.title,
          desc: this.desc,
          visible: this.visible,
          confirmTxt: this.confirmTxt,
          cancelTxt: this.cancelTxt
        },
        on: {
          cancel: cancel ? cancel : noop,
          confirm: confirm ? confirm : noop,
          'update:title': (title: string) => {
            this.title = title
          }
        }
      })
    }
  })
}

// // 注册为全局组件的函数
// function registerModal() {
//   // 将组件注册到 vue 的 原型链里去,
//   // 这样就可以在所有 vue 的实例里面使用 this.$toast()
//   Vue.prototype.$confirm = showConfirm
// }

// export default registerModal

export default showConfirm
