<template>
  <a-upload
    :accept="accepts"
    :showUploadList="false"
    :beforeUpload="beforeUpload"
    :customRequest="unploadFiles"
    :multiple="multiple"
    @change="handleChange"
  >
    <slot name="extend"></slot>
  </a-upload>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { File } from './model';
import { Upload, message } from 'ant-design-vue';
import '@/components/RichText/styles/antd.scss';

Vue.use(Upload);

message.config({
  maxCount: 1
});

@Component
export default class Uploader extends Vue {
  private loading: boolean = false;
  private imageUrl: string = '';
  fileList: File[] = [];

  @Prop()
  callback?: Function;
  @Prop()
  upload?: Function;
  @Prop()
  accept?: string[];
  @Prop({ default: false })
  multiple?: boolean;

  get accepts(): string {
    if (this.accept) {
      return '.' + this.accept.join(',.');
    } else {
      // 要改一下么
      return '.png';
    }
  }

  async unploadFiles(option: any) {
    try {
      if (!this.upload) {
        return;
      }

      option.onSuccess = (file: File) => {
        this.fileList.push(file);
        if (this.callback) {
          this.callback(this.fileList, this.remove);
        }
      };

      this.upload(option.file, option);
    } catch (error) {
      message.error('上传失败！');
      option.onError('上传失败');
    }
    // return fileList
  }
  handleChange(info: any) {}
  beforeUpload(file: any) {
    return true;
  }
  remove() {
    this.fileList = [];
  }
}
</script>

<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
