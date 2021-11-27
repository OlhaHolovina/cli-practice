const validateCurrency = (currency, name = '') => {
    if (currency === undefined){
        throw new Error(`Whoops, you must provide a value for the ${name} currency, Received ${currency}`);
    }
}

module.exports = {validateCurrency};