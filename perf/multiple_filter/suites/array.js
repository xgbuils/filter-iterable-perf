const suiteCollection = require('../../suiteCollectionFactory')
const suite = require('../../suiteFactory')

const filterIterable = require('../tests/filter-iterable')
const filterArrayLikeIterable_0_1_0 = require('../tests/filter-arraylike-iterable_0.1.0')
const filterArrayLikeIterable_0_1_1 = require('../tests/filter-arraylike-iterable_0.1.1')
const filterArrayLikeIterable_0_1_2 = require('../tests/filter-arraylike-iterable_0.1.2')
const filterArrayLikeIterable_0_1_3 = require('../tests/filter-arraylike-iterable_0.1.3')
const imlazy = require('../tests/imlazy')
const ramda = require('../tests/ramda')
const immutable = require('../tests/immutable')
const native = require('../tests/native')

const smallIterable = require('../setup/smallIterable')
const mediumIterable = require('../setup/mediumIterable')
const bigIterable = require('../setup/bigIterable')

const fewFilters = require('../setup/fewFilters')
const enoughFilters = require('../setup/enoughFilters')
const manyFilters = require('../setup/manyFilters')

const array = require('../setup/array')

const tests = [
    filterArrayLikeIterable_0_1_0,
    filterArrayLikeIterable_0_1_1,
    filterArrayLikeIterable_0_1_2,
    filterArrayLikeIterable_0_1_3,
    filterIterable,
    imlazy,
    ramda,
    immutable,
    native
]

module.exports = suiteCollection({
    name: 'array',
    suites: [
        suiteCollection({
            name: 'iterable size',
            suites: [
                suite({
                    name: 'small',
                    setups: [
                        smallIterable,
                        enoughFilters,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'medium',
                    setups: [
                        mediumIterable,
                        enoughFilters,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'big',
                    setups: [
                        bigIterable,
                        enoughFilters,
                        array
                    ],
                    tests
                })
            ]
        }),
        suiteCollection({
            name: 'number of filters',
            suites: [
                suite({
                    name: 'few',
                    setups: [
                        mediumIterable,
                        fewFilters,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'enough',
                    setups: [
                        mediumIterable,
                        enoughFilters,
                        array
                    ],
                    tests
                }),
                suite({
                    name: 'a lot of',
                    setups: [
                        mediumIterable,
                        manyFilters,
                        array
                    ],
                    tests
                })
            ]
        })
    ]
})
