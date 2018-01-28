module.exports = Iterable => {
    return {
        fn () {
            const n = this.numberOfFilters
            let iterable = new Iterable(this.iterable)
            for (let i = 0; i < n; ++i) {
                iterable = iterable.filter(e => e !== i)
            }
            return iterable
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
