module.exports = () => {
    return {
        fn () {
            return this.iterable.filter(this.cb)
        },
        toArray (iterable) {
            return iterable
        }
    }
}
