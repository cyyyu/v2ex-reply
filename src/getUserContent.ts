import getAllReplyContents from './getAllReplyContents'

const allContents = getAllReplyContents()

// Get replys of specified user.
const getUserContents = (user: string, level: number): Array<string> => {
  let re = []
  for (let i = 0, l = allContents.length - 1; i < l; i++) {
    if (allContents[i].user === user && i < level) {
      re.push(allContents[i].content)
    }
  }
  return re
}

export default getUserContents