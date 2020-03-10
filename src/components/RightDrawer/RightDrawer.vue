<template>
  <div class="right_drawer_container">
    <a-drawer
      :title="title"
      width="500"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <div
        class="right_drawer_content"
        :class="{ hideImage: showImage !== 'true' }"
      >
        <slot name="content"></slot>
      </div>

      <slot
        name="footer"
        class="footer"
      ></slot>

      <div
        class="cancel_img"
        v-if="visible"
        @click="onClose"
      ></div>
    </a-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { Drawer } from "ant-design-vue";

@Component({
  components: {
    "a-drawer": Drawer
  }
})
export default class RightDrawer extends Vue {
  @Prop() private visible?: boolean;
  @Prop() private title?: string;
  @Prop() private showImage?: string;

  onClose() {
    this.$emit("close");
  }
}
</script>

<style lang="scss" scope>
.ant-drawer-content {
  .ant-drawer-wrapper-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .ant-drawer-header {
      padding: 0 !important;

      .ant-drawer-title {
        height: 40px;
        line-height: 40px;
        margin-left: 20px;
        font-weight: 500;
        font-size: 14px;
      }
    }

    .ant-drawer-body {
      height: calc(100% - 41px);
      padding: 0 !important;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .right_drawer_content {
        height: calc(100% - 62px);
        position: relative;
        background-image: url(https://qgt-style.oss-cn-hangzhou.aliyuncs.com/img/done/exam/drawerbc.png);
        background-position-y: bottom;
        background-repeat: no-repeat;
        background-size: 100% auto;
        overflow-y: scroll;
      }

      .hideImage {
        background-image: none;
      }

      .cancel_img {
        position: absolute;
        top: 27px;
        left: -12px;
        overflow-x: visible;
        width: 24px;
        height: 24px;
        z-index: 99;
        background-image: url(https://qgt-style.oss-cn-hangzhou.aliyuncs.com/img/done/exam/error.png);
        background-size: 100% 100%;

        &:hover {
          opacity: 0.7;
        }

        .footer {
          width: 100%;
          height: 62px;
        }
      }
    }
  }
}
</style>
