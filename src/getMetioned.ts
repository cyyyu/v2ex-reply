// Get all metioned users in a reply.

import map from './helpers/map'

const getMetioned = (content: string): Array<string> => {
  let o = content.match(/\@[^\s]*/g) || []
  return map(o, (val) => {
    return val.replace(/\@/, '')
  })
}

export default getMetioned
