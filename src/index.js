import uniqueRandomArray from 'unique-random-array'
const starWarsNames = require('./starwars-names.json')

const mainExport = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
}

const thisCodeIsNeverGoingTobeUsed = 'thisCodeIsNeverGoingTobeUsed';
console.log(tada);

export default mainExport
module.exports = mainExport // for CommonJS compatibility
