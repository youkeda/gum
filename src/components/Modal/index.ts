import Vue from 'vue'

import YKDModal from './Modal.vue'
export { default as YKDModal } from './Modal.vue'
import showConfirm from './modal'
import showMessage from './message'

const install = function(opts = {}) {
  Vue.component(YKDModal.name, YKDModal)
  Vue.prototype.$confirm = showConfirm
  Vue.prototype.$message = showMessage
}

export default {
  install
}
