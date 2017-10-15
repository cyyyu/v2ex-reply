import getAllReplyDetails from './getAllReplyDetails'
import map from './helpers/map'

const allContents = getAllReplyDetails()

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