const ramdaMultipleFilters = require('../ramdaMultipleFilters')

module.exports = dep => {
    return {
        fn: ramdaMultipleFilters(dep),
        toArray (obj) {
            return obj.transducer(obj.iterable)
        }
    }
}
