module.exports = ({compose, map, filter, range}) => {
    return {
        fn () {
            const n = this.numberOfFilters
            const filters = map(i => filter(e => e !== i), range(0, n))
            return {
                transducer: compose(...filters),
                iterable: this.iterable
            }
        },
        toArray (obj) {
            return obj.transducer(obj.iterable)
        }
    }
}
