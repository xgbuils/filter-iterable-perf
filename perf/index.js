const suitesCollection = require('./suiteCollectionFactory')

const filter = require('./filter/suites')
const multipleFilter = require('./multiple_filter/suites')

suitesCollection({
    name: 'benchmark',
    suites: [
        filter,
        multipleFilter
    ]
})()
