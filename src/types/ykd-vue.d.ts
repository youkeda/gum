// 声明全局方法
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $ykdconfirm: any
    $ykdmessage: any
  }
}
