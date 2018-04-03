
export const friendlyColumn = col => {
  switch (col) {
    case 'rmls_number':
      return 'rmls #'
    default:
      return col.replace(/_/g, ' ')
  }
}

export const friendlyValue = val => {
  if (!val.replace) return val

  switch (val) {
    case 'buyer_agent':
    case 'listing_agent':
      return val.replace(/_agent/, '')
    default:
      return val.replace(/_/g, ' ')
  }
}
