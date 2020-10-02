import _ from 'lodash'

/**
 * CSV string to array of objects parser
 * @param csvString
 * @returns {Array}
 */
export const csvToObjectArray = (csvString) => {
  let rows = csvString.split(/\n/)
  let headerCells = rows.shift().split(',')
  let objectArray = []

  while (rows.length) {
    let rowCells = rows.shift().split(',')
    let rowObject = _.zipObject(headerCells, rowCells)
    objectArray.push(rowObject)
  }
  return objectArray
}
