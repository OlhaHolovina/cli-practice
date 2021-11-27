const validateCurrencySupport = (supportedCurrencies, currency, name = '') => {
    if(supportedCurrencies.includes(currency) === false) {
        throw new Error(`Whoops, the ${name} currency in not supported, Received ${currency}. Supported currencies are: ${supportedCurrencies}`);
    }

    return currency;
}

module.exports = { validateCurrencySupport };