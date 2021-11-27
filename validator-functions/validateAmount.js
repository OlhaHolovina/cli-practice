const validateAmount = (amount) => {
    if (amount === undefined || amount < 0){
        throw new Error(`Whoops, the amount must be a number greater than 0, Received ${amount}`);
    }
}

module.exports = {validateAmount};