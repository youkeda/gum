<template>
  <div>
    <RichText
      :callback="getContent"
      :content="content"
      :fixMenu="fixMenu"
      :uploadFile="uploadFile"
      emptyNodeText="自定义placeholder"
    >
      <!-- :handlePaste="uploadFile" -->
    </RichText>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import RichText from '@/components/RichText/RichText.vue';
import uploadFile from './upload';
import { File, UploadOption } from '@/components/RichText/components/model';

@Component({
  components: {
    RichText
  }
})
export default class App extends Vue {
  fixMenu: object = {
    top: 200,
    style: {
      position: 'fixed',
      top: '50px',
      left: '50px',
      right: '50px'
    }
  };
  content: string = `
<h1>Most basic use</h1>
<blockquote>
  <p>This package is awesome!</p>
</blockquote>
<p></p>
    `;
  private getContent(str: string) {
    // console.log(`content: ${str.substr(0, 100)}...`);
  }

  uploadFile(file: any, option: UploadOption) {
    uploadFile(file, option);
  }
}
</script>

<style></style>
