import map from './helpers/map'
import print from './helpers/print'
import getText from './helpers/getText'
import getAllReplys from './getAllReplys'

interface replyContent {
  user: string
  content: string
  level: number
}

const getAllReplyContents = (): Array<replyContent> => map(getAllReplys(), (dom) => {
  if (!dom || !dom.previousElementSibling) return {}

  const user = dom.parentElement.querySelector('strong a').text
  const level = parseInt(dom.parentElement.querySelector('.fr .no').textContent)

  return {
    user,
    content: getText(dom),
    level
  }
})

export default getAllReplyContents