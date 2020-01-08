## JSConsole

这个项目为了模拟 chrome devTools console 而开发

## 支持 console 类型

- [x] Boolean
- [x] Null
- [x] Undefined
- [x] Number
- [x] String
- [x] Function
- [x] Object
- [x] Array
- [x] Error

## iframe-wrapper

为了支持 iframe postMessage 传递可序列化的消息，对原始数据封装一层 Wrapper 进行处理。

iframe-console-hook 地址：http://qgt-style.oss-cn-hangzhou.aliyuncs.com/commonJSCSS/console.js

主要思路如下，把原始数据封装为

```
{
  _y_type : '',  //类型标识
  value: any     //原始数据
}
```

在利用`Wrapper.vue`对这个数据进行解析，选择具体的`Type.vue`进行渲染。
