<template>
  <div>
    <div class="btn-group">
      <button @click="open">全局方法：打开弹框</button>
      <button @click="openComponent">普通引用：打开弹框1</button>
      <button @click="openComponentMessage">普通引用：打开message</button>
    </div>
    <!-- 有取消确认按钮的弹框 -->

    <Modal
      :title="'titlexxx'"
      :visible="localVisible"
      confirmTxt="支付"
      @cancel="cancel"
      @confirm="confirm"
    >
      <template v-slot:body>
        <div>
          body
        </div>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Modal from './ModalHasBtns.vue';
import { setTimeout } from 'timers';

@Component({
  components: {
    Modal
  }
})
export default class Demo extends Vue {
  private localVisible: boolean = false;

  openComponent() {
    this.localVisible = true;
  }

  cancel() {
    this.localVisible = false;
  }

  confirm(cb: Function) {
    setTimeout(() => {
      this.cancel();
      cb();
    }, 3000);
    return;
  }

  openComponentMessage() {
    this.$ykdmessage({
      message: '您有一条未支付的订单！',
      duration: 2000,
      cancel: () => {},
      type: 'loading'
    });
  }

  open() {
    this.$ykdconfirm({
      title: '您有一条未支付的订单',
      desc: '(24小时内可无条件退款)',
      cancelTxt: '放弃支付',
      confirmTxt: '立即支付',
      cancel: () => {},
      confirm: () => {}
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/lib.scss';

.btn-group {
  display: flex;
  flex-direction: column;
}
</style>
