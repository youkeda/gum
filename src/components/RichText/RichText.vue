<template>
  <div
    class="YKDEditor"
    ref="YKDEditor"
  >
    <editor-menu-bar
      :editor="editor"
      v-slot="{ commands, isActive, getMarkAttrs }"
    >
      <div
        class="menubar"
        ref="menubar"
        :style="menuBarStyle"
      >
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>粗体</span>
            </template>
            <i class="iconfont iconbold" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>斜体</span>
            </template>
            <i class="iconfont iconItalic" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>删除线</span>
            </template>
            <i class="iconfont iconstrikethrough"></i>
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>下划线</span>
            </template>
            <i class="iconfont iconunderline" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>行内代码</span>
            </template>
            <i class="iconfont iconcode"></i>
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>段落</span>
            </template>
            <i class="iconfont iconparagraph"></i>
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>一级标题</span>
            </template>
            H1
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>二级标题</span>
            </template>
            H2
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>三级标题</span>
            </template>
            H3
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>无序列表</span>
            </template>
            <i class="iconfont iconul" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>有序列表</span>
            </template>
            <i class="iconfont iconol" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>引用</span>
            </template>
            <i class="iconfont iconquote" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="codeHint(commands.code_block)"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>代码块</span>
            </template>
            <i
              style="font-size:20px;"
              class="iconfont iconcodesquareo"
            />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.link() }"
          @click="linkClick"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>超链接</span>
            </template>
            <i class="iconfont iconlink" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>分割线</span>
            </template>
            <i class="iconfont iconhr"></i>
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>撤销</span>
            </template>
            <i class="iconfont iconundo" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>重做</span>
            </template>
            <i class="iconfont iconredo" />
          </a-tooltip>
        </button>

        <button
          class="menubar__button"
          @click="showImagePrompt(commands.image)"
        >
          <Uploader
            :accept="['jpg', 'png', 'jpeg', 'gif', 'GIF']"
            :callback="upload"
            :multiple="true"
            :upload="uploadFile"
          >
            <template v-slot:extend>
              <a-tooltip placement="bottom">
                <template slot="title">
                  <span>插入图片</span>
                </template>
                <i class="iconfont iconpic" />
              </a-tooltip>
            </template>
          </Uploader>
        </button>

        <button
          class="menubar__button"
          @click="pickEmoji(commands.emoji, $event)"
        >
          <a-tooltip placement="bottom">
            <template slot="title">
              <span>添加表情</span>
            </template>
            <i class="iconfont iconexpression" />
          </a-tooltip>
        </button>
      </div>
    </editor-menu-bar>

    <editor-menu-bubble
      class="menububble"
      :editor="editor"
      @hide="hideLinkMenu"
      v-slot="{ commands, isActive, getMarkAttrs, menu }"
    >
      <div
        class="menububble"
        :class="{ 'is-active': menu.isActive }"
        :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
      >
        <form
          class="menububble__form"
          v-if="linkMenuIsActive"
          @submit.prevent="setLinkUrl(commands.link, linkUrl)"
        >
          <input
            class="menububble__input"
            type="text"
            v-model="linkUrl"
            placeholder="https://"
            ref="linkInput"
            @keydown.esc="hideLinkMenu"
          />
          <button
            class="menububble__button"
            @click="setLinkUrl(commands.link, null)"
            type="button"
          >
            <i class="iconfont iconremove" />
          </button>
        </form>

        <template v-else>
          <button
            class="menububble__button"
            @click="showLinkMenu(getMarkAttrs('link'))"
            :class="{ 'is-active': isActive.link() }"
          >
            <span>{{ isActive.link() ? '更新链接' : '添加链接' }}</span>
            <i class="iconfont iconlink" />
          </button>
        </template>
      </div>
    </editor-menu-bubble>

    <editor-content
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { Editor, EditorContent, EditorMenuBar, EditorMenuBubble } from 'tiptap';
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,
  Placeholder,
  CodeBlockHighlight
} from 'tiptap-extensions';
import EmojiNode from './scripts/emoji';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import Uploader from '@/components/RichText/components/Uploader.vue';
import { Emoji } from 'ykd-components';
import { message, Tooltip } from 'ant-design-vue';
import './styles/antd.scss';
import 'ykd-components/dist/ykd-components.css';

Vue.use(Tooltip);

message.config({
  maxCount: 1
});

export default {
  props: {
    // publish: {
    //   type: Function,
    //   default: null
    // },
    callback: {
      type: Function,
      default: null
    },
    emptyNodeText: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    fixMenu: {
      type: Object,
      default: () => { }
    },
    uploadFile: {
      type: Function,
      default: null
    }
  },
  components: {
    EditorContent,
    EditorMenuBar,
    Uploader,
    EditorMenuBubble
  },
  data() {
    return {
      // failedImgList: [],
      // showImageHint: false,
      isActive: false,
      // linkText: '',
      // keepInBounds: true,
      src: '',
      show: false,
      linkUrl: null,
      linkMenuIsActive: false,
      focused: false,
      editor: new Editor({
        // autoFocus: true,
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Image(),
          new Placeholder({
            emptyNodeClass: 'is-empty',
            emptyNodeText: this.emptyNodeText || '详细描述问题 …',
            showOnlyWhenEditable: true
          }),
          new CodeBlockHighlight({
            languages: {
              javascript,
              css
            }
          }),
          new EmojiNode()
        ],
        onUpdate: () => {
          if (this.callback) {
            // console.log(this.editor.getJSON())
            // console.log(this.editor.getHTML())
            this.callback(this.editor.getHTML());
          }
        },
        onBlur: () => {
          this.focused = false;
        }
      }),
      localFixMenu: null
    };
  },
  computed: {
    menuBarStyle() {
      if (!this.localFixMenu || !this.localFixMenu.fixed) {
        return ''
      }

      return this.localFixMenu && this.localFixMenu.style || ''
    }
  },
  watch: {
    fixMenu: {
      handler(value) {
        if (value) {
          this.localFixMenu = {
            ...value
          }
          Vue.set(this.localFixMenu, 'fixed', false)
        }
      },
      immediate: true,
      deep: true
    },
    content: {
      handler(value) {
        if (!this.editor.getHTML().replace(/<\/?\w+>/g, '')) {
          this.editor.setContent(value);
        }
      },
      immediate: true
    }
  },
  mounted() {
    if (this.fixMenu) {
      document.addEventListener('scroll', this.listener);
    }
    document.addEventListener('paste', async event => {
      var items = (event.clipboardData || event.originalEvent.clipboardData)
        .items;
      if (items[0]) {
        var item = items[0];
        if (item.kind === 'file') {
          var blob = item.getAsFile();
          if (this.uploadFile) {
            this.uploadFile(blob, {
              onSuccess: this.insertPaste
            })
          }
        }
      }
    });
  },
  methods: {
    removeContent() {
      this.editor.setContent('');
    },
    insertPaste({ url }) {
      const state = this.editor.state
      const { selection, schema } = state

      const position = selection.$cursor
        ? selection.$cursor.pos
        : selection.$to.pos
      const node = schema.nodes.image.create({
        src: url
      })
      const transaction = state.tr.insert(position, node)
      this.editor.view.dispatch(transaction)

    },
    linkClick() {
      message.info('请选中文字，再添加链接！');
    },
    listener() {
      if (this.$refs.menubar && this.$refs.YKDEditor) {
        if (Math.abs(this.$refs.YKDEditor.getBoundingClientRect().top) < this.localFixMenu.top) {
          this.localFixMenu.fixed = false
        } else {
          this.localFixMenu.fixed = true
        }
      }
    },
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(() => {
        this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl(command, url) {
      command({ href: url });
      this.hideLinkMenu();
      this.editor.focus();
    },
    codeHint(command) {
      command();
      if (this.editor.getHTML().indexOf('<pre>') > -1) {
        message.info('"shift" + "enter" 可以结束代码块的编辑哦～');
      }
    },
    showImagePrompt(command) {
      this.command = command;
      // todo 接入上传
      // this.src = prompt('Enter the url of your image here');
    },
    upload(fileList, remove) {
      if (fileList) {
        if (this.command) {
          for (let i = 0; i < fileList.length; i++) {
            this.command({ src: fileList[i].url });
          }
        }
        remove();
      }
    },
    pickEmoji(command, e) {
      Emoji({
        target: e.currentTarget,
        click: emoji => {
          e.content = emoji;
          command(e);
        }
      });
    }
    // hideImageHint() {
    //   this.showImageHint = false
    // },
    // async handleContent() {
    // let content = this.handleCode(this.editor.getHTML())
    // content = this.handleContentLink(content)
    // content = await this.handleContentImage(content)
    // this.callback(content)
    // if (this.failedImgList.length) {
    //   this.showImageHint = true
    // } else {
    //   this.publish()
    // }
    // },
    // handleCode(content) {
    //   const contentInPre = content.replace(
    //     /<pre><code>([\S\s]*?)<\/code><\/pre>/g,
    //     (a, b) => {
    //       return `<pre><code>${unescape(b)}</code></pre>`
    //     }
    //   )

    //   return highlight(contentInPre)
    // },
    // handleContentLink(content) {
    //   return content.replace(/(<a)/g, '<a target="_blank"')
    // },
    // async handleContentImage(content) {
    //   // 获取帖子中所有图片的地址
    //   const { srcList, dataBaseList } = this.getSrcList(content)
    //   let handledUrlListMap = {}
    //   // 跨域图片上传处理
    //   if (srcList.length) {
    //     handledUrlListMap = (await getImgUrlList(srcList)) || {}
    //   }
    //   // base64图片上传处理
    //   for (let i = 0; i < dataBaseList.length; i++) {
    //     await uploadBlob(this.convertBase64UrlToBlob(dataBaseList[i]), {
    //       onSuccess: url => {
    //         handledUrlListMap[dataBaseList[i]] = url
    //       }
    //     })
    //   }
    //   for (const key in handledUrlListMap) {
    //     // 替换成上传后的图片
    //     if (handledUrlListMap.hasOwnProperty(key) && handledUrlListMap[key]) {
    //       content = content.replace(
    //         key,
    //         `${handledUrlListMap[key]}?x-oss-process=image/resize,m_lfit,w_750`
    //       )
    //     } else {
    //       // 上传失败的图片放在 failedImgList 里
    //       this.failedImgList.push(key)
    //     }
    //   }

    //   return content
    // },
    // getSrcList(content) {
    //   let imgReg = /<img.*?(?:>|\/>)/gi
    //   let srcReg = /src=['"]?([^'"]*)['"]?/i
    //   let arr = content.match(imgReg) || []
    //   let srcList = []
    //   let dataBaseList = []
    //   for (let i = 0; i < arr.length; i++) {
    //     let src = arr[i].match(srcReg) || []
    //     if (src[1].startsWith('data:image')) {
    //       dataBaseList.push(src[1])
    //     } else if (!src[1].includes('oss-cn-hangzhou.aliyuncs.com')) {
    //       srcList.push(src[1])
    //     }
    //   }
    //   return { srcList, dataBaseList }
    // },
    // convertBase64UrlToBlob(urlData) {
    //   var bytes = window.atob(urlData.split(',')[1]) //去掉url的头，并转换为byte
    //   //处理异常,将ascii码小于0的转换为大于0
    //   var ab = new ArrayBuffer(bytes.length)
    //   var ia = new Uint8Array(ab)
    //   for (var i = 0; i < bytes.length; i++) {
    //     ia[i] = bytes.charCodeAt(i)
    //   }
    //   return new Blob([ab], { type: 'image/png' })
    // }
  },
  beforeDestroy() {
    this.editor.destroy();
    if (this.fixMenu) {
      document.removeEventListener('scroll', this.listener);
      // window.removeEventListener('scroll', this.listener)
    }
  }
};
</script>

<style lang="scss">
@import './styles/editor.scss';
@import './styles/menububble.scss';
</style>
