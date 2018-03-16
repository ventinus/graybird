import {get} from 'lodash'
import m from 'moment'

export const hyphenizePhone = (number = '') => {
  return number.substr(0, 3) + '-' + number.substr(3, 3) + '-' + number.substr(6)
}

export const getNumbers = s => s.replace(/\D/g, '')
