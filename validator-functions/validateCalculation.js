const validateCalculation = (currentRelation) => {
    if (currentRelation === undefined) {
        throw new Error(`Something wrong with the calculation, you must add a property to the relations object`);
    }

    return currentRelation;
}

module.exports = {validateCalculation};