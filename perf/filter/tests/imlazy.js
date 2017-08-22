const pkgVersion = 'imlazy@6.3.1'
const {filter} = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = filter(this.even, this.iterable)
        traverse(iterable)
    }
}
