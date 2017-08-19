const pkgVersion = 'ramda@0.24.1'
const {filter, map, compose, range} = require('../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const n = this.numberOfMaps
        const filters = map(i => filter(e => e !== i), range(0, n))
        const iterable = compose(...filters)(this.iterable)
        traverse(iterable)
    }
}
