import setHtml from './setHtml'

//
const setReplyBoxDom = (dom: HTMLElement, users: Array<string>) => {
  // Create a box.
  let div = document.createElement('div')
  div.setAttribute('class', 'reply_box')
  div.style.maxHeight = '300px'
  div.style.overflow = 'auto';
  (div.style as any).overscrollBehavior = 'contain'

  const level = parseInt(dom.parentElement.querySelector('.fr .no').textContent)

  // Find current user
  const currentUser = dom.parentElement.querySelector("strong a").textContent

  // Insert contents.
  setHtml(div, users, level, currentUser)

  // Prepend to dom.
  dom.insertBefore(div, dom.firstChild)
}

export default setReplyBoxDom
