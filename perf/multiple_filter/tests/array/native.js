module.exports = () => {
    return {
        fn () {
            const n = this.numberOfFilters
            let iterable = this.iterable
            for (let i = 0; i < n; ++i) {
                iterable = iterable.map(e => e !== i)
            }
            return iterable
        },
        toArray (iterable) {
            return iterable
        }
    }
}
