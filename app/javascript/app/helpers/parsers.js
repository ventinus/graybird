import * as R from 'ramda'

export const removeFromArray = (set, ...values) => R.reject(R.contains(R.__, values), set)

export const hasPresence = item => item.length > 0
