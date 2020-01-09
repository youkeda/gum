<template>
  <div class="ykd-message">
    <Modal
      :customClass="customClass"
      :visible="localVisible"
      :appendToDom="appendToDom"
      :destroyOnClose="destroyOnClose"
      :closeOnClickModal="true"
    >
    <template v-slot:body>
      <div class="message-body">
        <div v-if="typeicon" class="img">
          <img :src="typeicon" alt="">
        </div>
        <div class="txt">{{message}}</div>
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
export default class YKDMessage extends Vue {
  @Prop({ default: false })
  visible: boolean = false;
  @Prop({ default: '' })
  appendToDom?: string;
  @Prop({ default: false })
  destroyOnClose: boolean = false;
  @Prop()
  customClass?: string;
  @Prop({ default: '' })
  iconUrl!: string;
  @Prop({ default: '' })
  message?: string;
  @Prop({ default: 'success' })
  type!: string;
  @Prop({ default: 1000 })
  duration!: number;

  private localVisible: boolean = false;
  private icon: string = ''

  mounted() {
    setTimeout(this.cancel, this.duration);
  }

  get typeicon() {
    let icon = ''
    if (this.iconUrl) {
      icon = this.iconUrl
    } else {
      switch(this.type) {
        case 'success':
          icon = '//qgt-style.oss-cn-hangzhou.aliyuncs.com/img/sandwich/home_m/message-success.png';
          break;

        case 'error':
          icon = '//qgt-style.oss-cn-hangzhou.aliyuncs.com/img/sandwich/home_m/close.png';
          break;

        case 'loading':
          icon = '//qgt-style.oss-cn-hangzhou.aliyuncs.com/img/sandwich/home_m/circle.png';
          break;

        default:
          icon = '//qgt-style.oss-cn-hangzhou.aliyuncs.com/img/sandwich/home_m/star.png';
          break;
      }
    }
    return icon
  }

  // @Watch('iconUrl')
  // iconChange() {
  //   this.icon = this.iconUrl;
  // }

  @Watch('visible')
  visibleChange() {
    this.localVisible = this.visible;
  }

  cancel() {
    this.localVisible = false;
    this.$emit('cancel');
  }
}
</script>

<style lang="scss">
@import '@/styles/lib.scss';

.ykd-message {
  .ykd-modal {
    width: px2rem(432);
    .message-body {
      padding: px2rem(60) px2rem(30) px2rem(84);
      .img {
        width: px2rem(152);
        margin: 0 auto;
        margin-bottom: px2rem(40);
        > img {
          width: 100%;
        }
      }
      .txt {
        margin-top: px2rem(24);
        font-size: px2rem(32);
        line-height: px2rem(44);
        color: #000000;
        text-align: center;
      }
    }
  }
}
</style>
