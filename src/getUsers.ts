import getAllReplyContents from './getAllReplyContents'
import map from './helpers/map'

const allContents = getAllReplyContents()

// Get replys of specified user.
const getUserContents = (user: string, level: number): Array<string> => {
  const re = []
  map(allContents, (content) => {
    if (content.user === user && content.level < level) {
      re.push(content)
    }
  })
  return re
}

export default getUserContents