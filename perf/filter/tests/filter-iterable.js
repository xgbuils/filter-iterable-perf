const pkgVersion = 'filter-iterable@0.1.3'
const FilterIterable = require('../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = new FilterIterable(this.iterable)
            .filter(this.even)
        traverse(iterable)
    }
}
