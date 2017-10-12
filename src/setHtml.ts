// Insert html

import template from './template'
import map from './helpers/map'
import getUsers from './getUsers'

const setHtml = (dom: HTMLElement, users: Array<string>, level?: number) => {
  const li = template()
  let html = ''
  map(users, (user) => {
    const users = getUsers(user, level)
    map(users, user => {
      const content = user.content
      const head = `<img style='height: 14px;vertical-align: middle;' src='${user.avatar}' />`
      html += li.replace(/\{\{replace\}\}/g, `${head} ${user.user}: ${content}`)
    })
  })
  if (!html) dom.setAttribute('style', 'background: #cecece; color: white;')
  html = html || 'Cannot find any replys in current page.'
  dom.innerHTML = html
}

export default setHtml
