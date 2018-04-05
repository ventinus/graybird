import {capitalize} from 'lodash'

export const friendlyColumn = col => {
  switch (col) {
    case 'rmls_number':
      return 'RMLS #'
    case 'hoa_dues':
      return 'HOA Dues'
    default:
      return capitalize(col.replace(/_id/, '').replace(/_/g, ' '))
  }
}

export const friendlyValue = val => {
  if (!val || !val.replace) return val

  switch (val) {
    // case 'buyer_agent':
    // case 'listing_agent':
    //   return capitalize(val.replace(/_agent/, ''))
    default:
      return capitalize(val.replace(/_/g, ' '))
  }
}
