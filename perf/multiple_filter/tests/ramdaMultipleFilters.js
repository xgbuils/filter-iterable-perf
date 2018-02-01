module.exports = ({filter, map, compose, range}) => {
    return function () {
        const n = this.numberOfFilters
        const filters = map(i => filter(e => e !== i), range(0, n))
        return {
            transducer: compose(...filters),
            iterable: this.iterable
        }
    }
}
