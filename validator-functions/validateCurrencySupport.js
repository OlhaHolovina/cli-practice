const validateCurrencySupport = (supportedCurrencies, currency, name = '') => {
    if(supportedCurrencies[currency] === undefined) {
        `Whoops, the ${name} currency in not supported, Received ${currency}. Supported currencies are: ${supportedCurrencies.CAD}, ${supportedCurrencies.USD}`
    }
}

module.exports = { validateCurrencySupport };