const traverse = require('../../traverse_iterable')

module.exports = {
    name: 'native',
    fn () {
        const n = this.numberOfMaps
        let iterable = this.iterable
        for (let i = 0; i < n; ++i) {
            iterable = iterable.filter(e => e !== i)
        }
        traverse(iterable)
    }
}
