const ramdaMultipleFilters = require('../ramdaMultipleFilters')

module.exports = dep => {
    const {into} = dep
    return {
        fn: ramdaMultipleFilters(dep),
        toArray (obj) {
            return into([], obj.transducer, obj.iterable)
        }
    }
}
