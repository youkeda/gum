<template>
  <transition
    name="modal-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      v-show="visible"
      class="ykd-modal__wrapper"
      @click.self="handleWrapperClick"
    >
      <div
        role="dialog"
        :key="key"
        aria-modal="true"
        :aria-label="title || 'modal'"
        :class="['ykd-modal', customClass]"
        ref="modal"
      >
        <div class="ykd-modal__core">
          <div class="ykd-modal__header">
            <slot name="header">
            </slot>
          </div>
          <div class="ykd-modal__body">
            <slot name="body"></slot>
          </div>
          <div class="ykd-modal__footer">
            <slot name="footer">
            </slot>
          </div>
        </div>
        <div
          v-if="needCloseBtn"
          @click="handleClose"
          class="ykd-modal__close"
        >
          <img src="//qgt-style.oss-cn-hangzhou.aliyuncs.com/img/sandwich/home_m/close.png">
        </div>
      </div>

    </div>
  </transition>

</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator'

@Component
export default class Modal extends Vue {
  $refs!: {
    modal: HTMLElement
  }

  @Prop({ default: false }) visible: boolean = false
  @Prop({ default: '' }) appendToDom?: string
  @Prop({ default: 'modal' }) title: string = 'modal'
  @Prop({ default: false }) destroyOnClose: boolean = false
  @Prop() customClass?: string
  @Prop() beforeClose?: Function
  @Prop({ default: false }) needCloseBtn!: boolean
  @Prop({ default: false }) closeOnClickModal!: boolean

  private closed: boolean = true
  private key: number = 0

  @Watch('visible')
  visibleChange() {
    if (this.visible) {
      this.closed = false
      this.$emit('open')
      this.$nextTick(() => {
        this.$refs.modal.scrollTop = 0
      })
    } else {
      if (!this.closed) this.$emit('close')
      if (this.destroyOnClose) {
        this.$nextTick(() => {
          this.key++
        })
      }
    }
  }

  handleWrapperClick() {
    if (!this.closeOnClickModal) return
    this.handleClose()
  }

  handleClose() {
    if (typeof this.beforeClose === 'function') {
      this.beforeClose(this.hide)
    } else {
      this.hide(true)
    }
  }

  hide(cancel: boolean) {
    if (cancel !== false) {
      this.$emit('update:visible', false)
      this.$emit('close')
      this.closed = true
    }
  }

  appendTo() {
    if (this.appendToDom) {
      const dom = document.querySelector(this.appendToDom)
      if (dom) {
        dom.appendChild(this.$el)
      }
    }
  }

  afterEnter() {
    this.$emit('opened')
  }
  afterLeave() {
    this.$emit('closed')
  }
}
</script>
<style lang="scss">
@import '@/styles/lib.scss';
@import '@/styles/common.scss';

.ykd-modal__wrapper {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2000;
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.ykd-modal {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: px2rem(670);
  color: #000;
  box-sizing: border-box;

  .ykd-modal__core {
    background: #fff;
    border-radius: px2rem(12);
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .ykd-modal__close {
    width: px2rem(88);
    height: px2rem(88);
    position: absolute;
    top: px2rem(0);
    right: px2rem(8);
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: px2rem(32);
      height: px2rem(32);
    }
  }
}
</style>
<style lang="scss" scoped>
.modal-fade-enter-active {
  animation: modal-fade-in 0.3s;
}

.modal-fade-leave-active {
  animation: modal-fade-out 0.3s;
}

@keyframes modal-fade-in {
  0% {
    transform: translate3d(0, -15px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes modal-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -15px, 0);
    opacity: 0;
  }
}
</style>