const pkgVersion = 'imlazy@6.3.1'
const {filter} = require('../../packages')[pkgVersion]
const traverse = require('../../traverse_iterable')

module.exports = {
    name: pkgVersion,
    fn () {
        const n = this.numberOfMaps
        let {iterable} = this
        for (let i = 0; i < n; ++i) {
            iterable = filter(e => e !== i, iterable)
        }
        traverse(iterable)
    }
}
