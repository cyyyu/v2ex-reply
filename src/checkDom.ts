import getText from './helpers/getText'
import isReplying from './helpers/isReplying'
import setReplyBox from './setReplyBox'
import getMetioned from './getMetioned'

export default function checkDom(dom) {
  let content = getText(dom)
  if (content && isReplying(content)) {
    dom.style.position = 'relative'
    setReplyBox(dom, getMetioned(content))
  }
}
