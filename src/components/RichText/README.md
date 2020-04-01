富文本编辑器

## 普通 Component 引入

- [ ] 基础引用

## 参数

- callback(content)
  回调函数，实时获取输入的内容；

- emptyNodeText: string
  编辑器中没有内容时的 placeholder；

- content: string
  输入的原始内容；

- fixMenu: object 固定工具栏
  ```js
  fixMenu: object = {
    top: 200, // 页面向上滚动 200px 时，固定工具栏
    style: { // 固定的工具栏的样式
      position: 'fixed',
      top: '50px',
      left: '50px',
      right: '50px'
    }
  };
  ```

- uploadFile: Function
  上传图片的方法。
  ```js
  function uploadFile(file: any, option?: UploadOption) {
    // ...
    const name = 'img.jpg'; // 图片名称
    const url = 'https://.../img.jpg'; // 上传后的地址
    const uploadFile: File = { name: name, url: url }; // 包装成要求的数据格式
    option && option.onSuccess && option.onSuccess(uploadFile); // 通过回调把图片地址传给编辑器，编辑器就能正常显示该图片
  }

  interface File {
    name: string
    url: string
  }

  interface UploadOption {
    onProgress?: (val: number) => void;
    onSuccess?: (result: File) => void;
    onFailed?: () => void;
  }
  ```