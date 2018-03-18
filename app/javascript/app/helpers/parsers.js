import * as R from 'ramda'

export const removeFromArray = (set, ...values) => R.reject(R.contains(R.__, values), set)

export const parseParams = params => {
  return params.split('&').reduce((a, c) => {
    const spl = c.split('=')
    return {
      ...a,
      [spl[0]]: spl[1]
    }
  }, {})
}
