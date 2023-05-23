// Insert html

import map from './helpers/map'
import getUsers from './getUsers'

const setHtml = (dom: HTMLElement, users: Array<string>, level?: number, currentUser?: string) => {
  let html = ''
  map(users, (user) => {
    const users = getUsers(user, level)
    map(users, user => {
      let content = user.content

      // Replace "@currentUser" in the content as a tag
      content = content.replace(new RegExp('@' + currentUser, 'g'), `<span style='font-weight: bold; color: black;' >@${currentUser}</span>`)

      const head = `<img style='height: 24px;vertical-align: middle;' src='${user.avatar}' />`
      html += `
        <p>
          ${head} <a href='/member/${user.user}'>${user.user}</a>: ${content}
        </p>`
    })
  })
  if (!html) dom.setAttribute('style', 'background: #cecece; color: white;')
  html = html || 'Cannot find any replys in current page.'
  dom.innerHTML = html
}

export default setHtml
