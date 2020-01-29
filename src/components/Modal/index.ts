import Vue from 'vue'

import YKDModal from './Modal.vue'
export { default as YKDModal } from './Modal.vue'
import YKDModalHasBtns from './ModalHasBtns.vue'
import YKDMessage from './Message.vue'
import showConfirm from './modal'
import showMessage from './message'

const install = function(opts = {}) {
  console.error('register',YKDModal.name);
  Vue.component(YKDModal.name, YKDModal)
  Vue.component(YKDModalHasBtns.name, YKDModalHasBtns)
  Vue.component(YKDMessage.name, YKDMessage)
  Vue.prototype.$ykdconfirm = showConfirm
  Vue.prototype.$ykdmessage = showMessage
}

export default {
  install
}
