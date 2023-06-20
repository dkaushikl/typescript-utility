import {expect} from 'chai'
import names from '.'

describe('names', () => {
  it('should have a list of all available names', () => {
    expect(names.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(names.random()).to.satisfy(isIncludedIn(names.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
