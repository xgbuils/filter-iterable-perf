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

const cb = require('../setup/cb')

const smallIterable = require('../setup/smallIterable')
const mediumIterable = require('../setup/mediumIterable')
const bigIterable = require('../setup/bigIterable')

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
        suite({
            name: 'small',
            setups: [
                cb,
                smallIterable,
                array
            ],
            tests
        }),
        suite({
            name: 'medium',
            setups: [
                cb,
                mediumIterable,
                array
            ],
            tests
        }),
        suite({
            name: 'big',
            setups: [
                cb,
                bigIterable,
                array
            ],
            tests
        })
    ]
})
