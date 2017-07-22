import map from './helpers/map'
import print from './helpers/print'
import getText from './helpers/getText'
import getAllReplys from './getAllReplys'

interface replyContent {
  user: string
  content: string
}

const getAllReplyContents = (): Array<replyContent> => map(getAllReplys(), (dom) => {
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

export default getAllReplyContents