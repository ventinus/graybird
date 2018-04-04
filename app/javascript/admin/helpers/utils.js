export const hasPresence = item => {
  switch (typeof item) {
    case 'number':
      return true
    case 'array':
    case 'string':
      return item.length > 0
    case 'object':
      return !!item && Object.keys(item).length > 0
    case 'undefined':
      return false
    default:
      return true
  }
}

// test
// [[], [1], 1, 0, -1, '' ,'asdf', {}, {asdf: 'asdf'}, null, undefined].map(hasPresence)
// => [false, true, true, true, true, false, true, false, true, false, false]
