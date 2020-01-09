<template>
  <div>
    <div class="btn-group">
      <button @click="open">全局方法：打开弹框</button>
      <button @click="openComponent">普通引用：打开弹框1</button>
      <button @click="openComponentMessage">普通引用：打开message</button>
    </div>
    <!-- 有取消确认按钮的弹框 -->
    <Modal
      :customClass="customClass"
      :visible="localVisible"
      :appendToDom="appendToDom"
      :destroyOnClose="destroyOnClose"
      :closeOnClickModal="closeOnClickModal"
      :needCloseBtn="true"
      @update:visible="localVisible = $event"
    >
      <template v-slot:header>
      <div class="confirm-header">
        <div
          v-if="!title"
          class="confirm-title"
        >{{title}}titleeeeeeee</div>
      </div>
    </template>

    <template v-slot:body>
      <slot name="body"></slot>
    </template>

    <template v-slot:footer>
      <div class="confirm-footer">
        <button
          class="cancel"
          @click="cancel"
        >取消</button>
        <button
          class="confirm"
          @click="confirm"
        >确定</button>
      </div>
    </template>
  </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import Modal from './Modal.vue';

@Component({
  components: {
    Modal
  }
})
export default class Demo extends Vue {
  openComponent() {
    this.localVisible = true;
  }

  openComponentMessage() {
    this.$message({
      message: '您有一条未支付的订单！',
      duration: 10000,
      cancel: () => {}
    });
  }

  open() {
    this.$confirm({
      title: '您有一条未支付的订单',
      desc: '(24小时内可无条件退款)',
      cancelTxt: '放弃支付',
      confirmTxt: '立即支付',
      cancel: () => {},
      confirm: () => {
        console.log('确认');
      }
    });
  }
  
  @Prop({ default: false })
  visible: boolean = false;
  @Prop({ default: '' })
  appendToDom?: string;
  @Prop({ default: '' })
  title!: string;
  @Prop({ default: '' })
  desc!: string;

  @Prop({ default: false })
  destroyOnClose: boolean = false;
  @Prop()
  customClass?: string;
  @Prop({ default: false })
  closeOnClickModal!: boolean;
  private localVisible: boolean = false;

  mounted() {}

  @Watch('visible')
  visibleChange() {
    this.localVisible = this.visible;
  }

  cancel() {
    this.localVisible = false;
    this.$emit('cancel');
  }
  confirm() {
    this.localVisible = false;
    this.$emit('confirm');
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/lib.scss';

.btn-group {
  display: flex;
  flex-direction: column;
}

.confirm-header {
  // padding: px2rem(40) px2rem(32);
  border: 1px solid #efefef;
  .confirm-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: px2rem(30);
    color: #000000;
    font-weight: 500;
    line-height: px2rem(90);
    box-sizing: border-box;
    padding: 0 px2rem(40);
  }
  .confirm-desc {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: px2rem(24);
    color: #181818;
    line-height: px2rem(33);
  }
}

.ykd-modal__body {
  padding: px2rem(40) px2rem(40);
}

.confirm-footer {
  height: px2rem(120);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 px2rem(40);

  .cancel,
  .confirm {
    flex-grow: none;
    width: px2rem(250);
    height: px2rem(80);
    font-size: px2rem(30);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
  }
  .cancel {
    color: #1b1b1b;
    background: #ffffff;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
  }

  .confirm {
    color: #fff;
    background: #3ab599;
  }
}
</style>
