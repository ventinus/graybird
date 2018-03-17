// import {get} from 'lodash'
// import m from 'moment'

// export const hyphenizePhone = (number = '') => {
//   return number.substr(0, 3) + '-' + number.substr(3, 3) + '-' + number.substr(6)
// }

// export const getNumbers = s => s.replace(/\D/g, '')

export const dekebabCase = str => str.replace(/-/g, ' ')

export const combineModifiers = (base, mods = []) => mods.reduce((a, c) => `${a} ${base}--${c}`, '').trim()

// TODO: implement comas
export const prettyNum = num => num

export const toDollar = num => typeof num === 'number' ? `$${prettyNum(num)}` : ''
