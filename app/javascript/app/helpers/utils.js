
export const hasPresence = item => {
  switch (typeof item) {
    case 'number':
      return true
    case 'array':
    case 'string':
      return item.length > 0
    case 'object':
      return Object.keys(item).length > 0
    case 'undefined':
      return false
    default:
      return true
  }
}

