module.exports = Iterable => {
    return {
        fn () {
            return new Iterable(this.iterable)
                .filter(this.cb)
        },
        toArray (iterable) {
            return [...iterable]
        }
    }
}
