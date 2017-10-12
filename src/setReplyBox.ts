import setHtml from './setHtml'

//
const setReplyBoxDom = (dom: HTMLElement, users: Array<string>) => {
  // Create a box.
  let div = document.createElement('div')
  div.setAttribute('class', 'reply_box')

  const level = parseInt(dom.parentElement.querySelector('.fr .no').textContent)

  // Insert contents.
  setHtml(div, users, level)

  // Prepend to dom.
  dom.insertBefore(div, dom.firstChild)
}

export default setReplyBoxDom