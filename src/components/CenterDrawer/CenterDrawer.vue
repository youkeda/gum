<template>
  <div>
    <div v-if="isShow">
      <a-modal
        class="delete-topic-bank-modal"
        :title="title"
        v-model="visible"
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
    <div v-if="!isShow">
      <a-modal
        class="topic-number"
        title="题目数量"
        v-model="visible"
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
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class CenterDrawer extends Vue {
  @Prop() private visible?: boolean;
  @Prop() private title?: string;
  @Prop() private type?: string;
  private isShow: boolean = true;
  async mounted() {
    if (this.type === "warn") {
      this.isShow = true;
    }
    if (this.type === "normal") {
      this.isShow = false;
    }
  }
  showModal() {
    this.$emit("open");
  }

  handleCancel() {
    this.$emit("close");
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
