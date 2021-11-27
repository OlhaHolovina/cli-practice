const validateCurrencySupport = (supportedCurrencies, currency, name = '') => {
    if(supportedCurrencies[currency] === undefined) {
        throw new Error(`Whoops, the ${name} currency in not supported, Received ${currency}. Supported currencies are: CAD, USD`);
    }
}

module.exports = { validateCurrencySupport };