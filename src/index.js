import uniqueRandomArray from 'unique-random-array'
const names = require('./names.json')

const mainExport = {
  all: names,
  random: uniqueRandomArray(names),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
