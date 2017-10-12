import map from './helpers/map'
import getText from './helpers/getText'
import getAllReplys from './getAllReplys'

interface replyContent {
  user: string
  content: string
  level: number
  avatar: string
}

const getAllReplyContents = (): Array<replyContent> => map(getAllReplys(), (dom) => {
  if (!dom || !dom.previousElementSibling) return {}

  const user = dom.parentElement.querySelector('strong a').text
  const level = parseInt(dom.parentElement.querySelector('.fr .no').textContent)
  const avatar = dom.parentElement.previousElementSibling.previousElementSibling.querySelector('img').attributes.getNamedItem('src').value

  return {
    user,
    content: getText(dom),
    level,
    avatar
  }
})

export default getAllReplyContents