const pkgVersion = 'filter-arraylike-iterable@0.1.2'
const FunctorIterable = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const n = this.numberOfMaps
        let iterable = new FunctorIterable(this.iterable)
        for (let i = 0; i < n; ++i) {
            iterable = iterable.filter(e => e !== i)
        }
        traverse(iterable)
    }
}
