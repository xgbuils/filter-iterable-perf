const log = require('./log')
const template = require('./template')

module.exports = function suiteCollectionFactory (params) {
    return function (options = {indentation: 0}) {
        const setups = Object.assign({}, params.setups, options.setups)
        const title = template(params.name, setups)
        return log(options.indentation, `${title}\n`).then(() => {
            return params.suites.reduce((prom, suite) => {
                const opts = Object.assign({}, params, options, {
                    indentation: options.indentation + 4,
                    setups
                })
                return prom.then(() => suite(opts))
            }, Promise.resolve())
        })
    }
}
