module.exports = ({filter, into}) => {
    return {
        fn () {
            return into([], filter(this.cb), this.iterable)
        },
        toArray (iterable) {
            return iterable
        }
    }
}
