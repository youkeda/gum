<template>
  <Modal
    :customClass="customClass"
    :visible="localVisible"
    :appendToDom="appendToDom"
    :destroyOnClose="destroyOnClose"
    :closeOnClickModal="closeOnClickModal"
    @update:visible="localVisible = $event"
  >
    <template v-slot:header>
      <div class="confirm-header">
        <div
          v-if="title"
          class="confirm-title"
        >{{title}}</div>
        <div
          v-if="desc"
          class="confirm-desc"
        >{{desc}}
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <div class="confirm-footer">
        <button
          class="cancel"
          @click="cancel"
        >{{cancelTxt || '取消'}}</button>
        <button
          class="confirm"
          @click="confirm"
        >{{confirmTxt || '确定'}}</button>
      </div>
    </template>
  </Modal>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import Modal from './Modal.vue';

@Component({
  components: {
    Modal
  }
})
export default class YKDConfirm extends Vue {
  @Prop({ default: false })
  visible: boolean = false;
  @Prop({ default: '' })
  appendToDom?: string;
  @Prop({ default: '' })
  title!: string;
  @Prop({ default: '' })
  desc!: string;

  @Prop({ default: true })
  destroyOnClose: boolean = true;
  @Prop()
  customClass?: string;
  @Prop({ default: false })
  closeOnClickModal!: boolean;
  @Prop()
  cancelTxt?: string;
  @Prop()
  confirmTxt?: string;

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

.ykd-modal {
  width: px2rem(618);
}

.ykd-modal__core {
  border-radius: px2rem(20);
}

.confirm-header {
  min-height: px2rem(186);
  padding: px2rem(40) px2rem(32);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .confirm-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: px2rem(32);
    font-weight: 500;
    color: #181818;
    line-height: px2rem(45);
    margin-bottom: px2rem(20);
  }
  .confirm-desc {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: px2rem(30);
    line-height: px2rem(42);
    color: #BBBBBB;
  }
}

.confirm-footer {
  height: px2rem(120);
  border-top: 1px solid #F4F4F4;
  display: flex;

  .cancel,
  .confirm {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: none;
    outline: none;
  }
  .cancel {
    // color: #1685fb;
    // font-weight: 500;
    font-size: px2rem(32);
    border-right: 1px solid #F4F4F4;
  }

  .confirm {
    // color: #1685fb;
    font-size: px2rem(32);
  }
}
</style>