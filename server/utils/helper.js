function calculateSplit(totalAmount, people) {
    if (people <= 0) {
        return 0;
    }

    return (totalAmount / people).toFixed(2);
}

module.exports = {
    calculateSplit
};
