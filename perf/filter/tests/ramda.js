const pkgVersion = 'ramda@0.24.1'
const {filter} = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = filter(this.even, this.iterable)
        traverse(iterable)
    }
}
