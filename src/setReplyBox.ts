import print from './helpers/print'
import setHtml from './setHtml'

//
const setReplyBoxDom = (dom: HTMLElement, users: Array<string>) => {
  // Create a box.
  let div = document.createElement('div')
  div.setAttribute('class', 'reply_box')

  let level = 0
  try {
    level = parseInt(dom.parentElement.querySelector('.fr .no').textContent)
  } catch (err) {
    print(err)
    level = 0
  }

  // Insert contents.
  setHtml(div, users, level)

  // Prepend to dom.
  dom.insertBefore(div, dom.firstChild)
}

export default setReplyBoxDom