const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')
const packages = require('../../packages')

const {
    SMALL_SIZE,
    MEDIUM_SIZE,
    BIG_SIZE
} = require('../../setup/values')

module.exports = function (name, buildIterable, tests) {
    return suiteCollection({
        packages,
        name,
        setups: {
            cb: e => e % 2 === 0
        },
        build: buildIterable,
        suites: [
            suite({
                name: 'small size (${length} items)',
                setups: {
                    length: SMALL_SIZE
                },
                tests
            }),
            suite({
                name: 'medium size (${length} items)',
                setups: {
                    length: MEDIUM_SIZE
                },
                tests
            }),
            suite({
                name: 'big size (${length} items)',
                setups: {
                    length: BIG_SIZE
                },
                tests
            })
        ]
    })
}
