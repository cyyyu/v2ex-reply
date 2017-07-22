// Insert html

import template from './template'
import map from './helpers/map'
import getUserContent from './getUserContent'

const setHtml = (dom: HTMLElement, users: Array<string>, level?: number) => {
  let li = template(),
    html = ''
  map(users, (user) => {
    let contents = getUserContent(user, level)
    map(contents, (content) => {
      html += li.replace(/\{\{replace\}\}/g, `${user}: ${content}`)
    })
  })
  if (!html) dom.setAttribute('style', 'background: #cecece; color: white;')
  html = html || 'Cannot find any replys in current page.'
  dom.innerHTML = html
}

export default setHtml
