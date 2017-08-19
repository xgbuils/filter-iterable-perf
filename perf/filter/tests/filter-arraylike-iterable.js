const pkgVersion = 'filter-arraylike-iterable@0.1.0'
const FilterArrayLikeIterable = require('../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const iterable = new FilterArrayLikeIterable(this.iterable)
            .filter(this.even)
        traverse(iterable)
    }
}
