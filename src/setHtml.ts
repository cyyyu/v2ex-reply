// Insert html

import map from './helpers/map'
import getUsers from './getUsers'

const setHtml = (dom: HTMLElement, users: Array<string>, level?: number) => {
  let html = ''
  map(users, (user) => {
    const users = getUsers(user, level)
    map(users, user => {
      const content = user.content
      const head = `<img style='height: 24px;vertical-align: middle;' src='${user.avatar}' />`
      html += `
        <p>
          ${head} <a href='https://www.v2ex.com/member/${user.user}'>${user.user}</a>: ${content}
        </p>`
    })
  })
  if (!html) dom.setAttribute('style', 'background: #cecece; color: white;')
  html = html || 'Cannot find any replys in current page.'
  dom.innerHTML = html
}

export default setHtml
