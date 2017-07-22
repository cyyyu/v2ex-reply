/*
  Extension for v2ex.com
  */

// Use print as console.log
const print = console.log.bind(console)

// The html
const replyBoxHtmlTemplate = () => `<p>{{replace}}</p>`

// All replys in current page.
const allDoms = query => document.querySelectorAll(query)

// Does a reply @someone ?
const isMetioningSomeOne = (content) => content.indexOf("@") > -1

// Map util.
const map = (target, fn) => {
  if (Array.isArray(target)) {
    return Array.prototype.map.call(target, fn)
  } else {
    let re = [],
      val
    for (let key in target) {
      val = target[key]
      re.push(fn(val, key))
    }
    return re
  }
}

// Get text of a dom.
const getText = (e) => {
  let t = ""
  e = e.childNodes || e
  for (let j = 0; j < e.length; j++) {
    if (!e[j]) continue
    t += e[j].nodeType != 1 ?
      e[j].nodeValue : getText(e[j].childNodes)
  }
  return t
}

// Get all metioned users in a reply.
const getMetioned = (content) => {
  let o = content.match(/\@[^\s]*/g) || []
  return map(o, (val) => {
    return val.replace(/\@/, '')
  })
}

// Insert html
const setBoxHtml = (dom, users, level) => {
  let li = replyBoxHtmlTemplate(),
    html = ''
  map(users, (user) => {
    let contents = getUserContents(user, level)
    map(contents, (content) => {
      html += li.replace(/\{\{replace\}\}/g, `${user}: ${content}`)
    })
  })
  if (!html) dom.setAttribute('style', 'background: #cecece; color: white;')
  html = html || 'Cannot find any replys in current page.'
  dom.innerHTML = html
}

//
const setReplyBoxDom = (dom, users) => {
  // Create a box.
  let div = document.createElement('div')
  div.innerHTML = replyBoxHtmlTemplate
  div.setAttribute('class', 'reply_box')

  let level = 0
  try {
    level = parseInt(dom.parentElement.querySelector('.fr .no').textContent)
  } catch (err) {
    print(err)
    level = 0
  }

  // Insert contents.
  setBoxHtml(div, users, level)

  // Prepend to dom.
  dom.insertBefore(div, dom.firstChild)
}

//
const checkDom = (dom) => {
  let content = getText(dom)
  if (content && isMetioningSomeOne(content)) {
    dom.style.position = 'relative'
    setReplyBoxDom(dom, getMetioned(content))
  }
}

// Get replys of specified user.
const getUserContents = (user, level) => {
  let re = []
  for (let i = 0, l = allContents.length - 1; i < l; i++) {
    if (allContents[i].user === user && i < level) {
      re.push(allContents[i].content)
    }
  }
  return re
}

// ============================================
const allContents = map(allDoms('.reply_content'), (dom) => {
  if (!dom || !dom.previousElementSibling) return {}
  let user = ''
  try {
    user = dom.parentElement.querySelector('strong a').text
  } catch (err) {
    print(err, dom)
    user = ''
  }
  return {
    user: user,
    content: getText(dom)
  }
})

map(allDoms('.reply_content'), checkDom)
