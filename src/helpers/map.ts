// Map util.
type targetType = Array<any> | object

export default function map(target: targetType, fn: (val: any, key: number | string, src?: targetType) => any): Array<any> {
  if (Array.isArray(target)) {
    return Array.prototype.map.call(target, fn)
  } else {
    let re = [],
      val
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        val = target[key]
        re.push(fn(val, key))
      }
    }
    return re
  }
}