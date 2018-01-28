const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')
const packages = require('../../packages')

const {
    FEW_FILTERS,
    ENOUGH_FILTERS,
    TOO_MUCH_FILTERS,
    SMALL_SIZE,
    MEDIUM_SIZE,
    BIG_SIZE
} = require('../../setup/values')

module.exports = function (name, buildIterable, tests) {
    return suiteCollection({
        name,
        packages,
        setups: {},
        build: buildIterable,
        suites: [
            suiteCollection({
                name: 'iterable size',
                setups: {
                    numberOfFilters: ENOUGH_FILTERS
                },
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
            }),
            suiteCollection({
                name: 'number of filters',
                setups: {
                    length: MEDIUM_SIZE
                },
                suites: [
                    suite({
                        name: 'few filters (x${numberOfFilters})',
                        setups: {
                            numberOfFilters: FEW_FILTERS
                        },
                        tests
                    }),
                    suite({
                        name: 'enough filters (x${numberOfFilters})',
                        setups: {
                            numberOfFilters: ENOUGH_FILTERS
                        },
                        tests
                    }),
                    suite({
                        name: 'a lot of filters (x${numberOfFilters})',
                        setups: {
                            numberOfFilters: TOO_MUCH_FILTERS
                        },
                        tests
                    })
                ]
            })
        ]
    })
}
