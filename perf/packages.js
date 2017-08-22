const niv = require('npm-install-version')

const packages = [
    'ramda@0.24.1',
    'immutable@3.8.1',
    'imlazy@6.3.1',
    'filter-iterable@0.1.3',
    'filter-arraylike-iterable@0.1.0',
    'filter-arraylike-iterable@0.1.1',
    'filter-arraylike-iterable@0.1.2',
    'filter-arraylike-iterable@0.1.3'
]

packages.forEach(package => niv.install(package))

module.exports = packages.reduce((modules, package) => {
    return Object.assign(modules, {
        [package]: niv.require(package)
    })
}, {})