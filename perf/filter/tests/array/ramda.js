module.exports = ({filter}) => {
    return {
        fn () {
            return filter(this.cb, this.iterable)
        },
        toArray (iterable) {
            return iterable
        }
    }
}
