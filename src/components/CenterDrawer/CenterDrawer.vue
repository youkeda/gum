<template>
  <div>
    <div v-if="isShow">
      <a-modal
        class="delete-topic-bank-modal"
        :title="title"
        :visible="localVisible"
        @cancel="handleCancel"
        :footer="null"
        :centered="true"
        :width="width ? width : 820"
      >
        <div class="content">
          <slot name="content"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </a-modal>
    </div>
    <div v-if="!isShow">
      <a-modal
        class="topic-number"
        :title="title"
        :visible="localVisible"
        @cancel="handleCancel"
        :footer="null"
      >
        <div class="content">
          <slot name="content"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { Modal } from 'ant-design-vue';

@Component({
  components: {
    'a-modal': Modal,
  },
})
export default class CenterDrawer extends Vue {
  @Prop() private visible!: boolean;
  @Prop() private title?: string;
  @Prop() private type?: string;
  @Prop() private width?: number;
  private isShow: boolean = true;
  private localVisible: boolean = false;
  async mounted() {
    this.localVisible = this.visible;
    if (this.type === 'warn') {
      this.isShow = true;
    }
    if (this.type === 'normal') {
      this.isShow = false;
    }
  }
  @Watch('visible')
  onVisibleChange() {
    this.localVisible = this.visible;
  }

  showModal() {
    this.$emit('open');
  }

  handleCancel() {
    this.$emit('close');
  }
}
</script>

<style lang="scss">
.ant-modal-wrap {
  .delete-topic-bank-modal {
    .ant-modal-content {
      .ant-modal-close {
        background: #efeeee !important;
      }
      .ant-modal-header {
        background: #efeeee !important;
        .ant-modal-title {
          color: #ff3636;
        }
      }
    }
  }
}
</style>