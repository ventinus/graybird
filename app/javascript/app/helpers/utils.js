
export const parseParams = params => {
  return params.split('&').reduce((a, c) => {
    const spl = c.split('=')
    return {
      ...a,
      [spl[0]]: spl[1]
    }
  }, {})
}
