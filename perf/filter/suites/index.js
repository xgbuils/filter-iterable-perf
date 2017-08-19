const suiteCollection = require('../../suiteCollectionFactory')
const arraySuite = require('./array')

module.exports = suiteCollection({
    name: 'filter',
    suites: [
        arraySuite
    ]
})
