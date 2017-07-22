// Get text of a dom.

interface eType extends HTMLElement, NodeList { }

function getText(e: Partial<eType>) {
  let t = ""
  e = e.childNodes || e
  for (let j = 0; j < e.length; j++) {
    if (!e[j]) continue
    t += e[j].nodeType != 1 ?
      e[j].nodeValue : getText(e[j].childNodes)
  }
  return t
}

export default getText