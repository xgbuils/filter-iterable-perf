const suiteCollection = require('../../suiteCollectionFactory')
const requireDir = require('require-dir')

const buildIterableSuites = require('./buildIterableSuites')
const buildArray = require('../../setup/buildArray')
const arrayTests = requireDir('../tests/array/')

const arraySuite = buildIterableSuites(
    'array',
    buildArray,
    arrayTests
)

module.exports = suiteCollection({
    name: 'multiple filters',
    suites: [
        arraySuite
    ]
})
