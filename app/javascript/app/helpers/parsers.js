import * as R from 'ramda'

export const removeFromArray = (set, ...values) => R.reject(R.contains(R.__, values), set)
