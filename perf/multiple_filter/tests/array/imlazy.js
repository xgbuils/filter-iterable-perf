module.exports = ({filter}) => {
    return {
        fn () {
            const n = this.numberOfFilters
            let iterable = this.iterable
            for (let i = 0; i < n; ++i) {
                iterable = filter(e => e !== i, iterable)
            }
            return iterable
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
