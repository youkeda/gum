import { Node } from 'tiptap'
import { Emoji } from 'ykd-components'
import { replaceText } from 'tiptap-commands'

export default class EmojiNode extends Node {
  get name() {
    return 'emoji'
  }

  get schema() {
    return {
      // here you have to specify all values that can be stored in this node
      inline: true,
      attrs: {
        content: {
          default: null
        }
      },
      group: 'inline',
      selectable: false,
      draggable: false,
      // parseDOM and toDOM is still required to make copy and paste work
      parseDOM: [],
      toDOM: node => ['span', {}, `${node.attrs.content}`]
    }
  }

  commands({ schema, type }) {
    return attrs => (state, dispatch) => {
      const { selection } = state
      const position = selection.$cursor
        ? selection.$cursor.pos
        : selection.$to.pos
      const node = type.create(attrs)
      const transaction = state.tr.insert(position, node)
      dispatch(transaction)

      return true
    }
  }

  // return a vue component
  // this can be an object or an imported component
}
