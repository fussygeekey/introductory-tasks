const getConsecutiveUnits = units => {
    let consecutiveUnits = 0
    let maxConsecutiveUnits = consecutiveUnits;

    for (let i in units) {
        if (units[i] === 1) {
            consecutiveUnits++;
            if (consecutiveUnits > maxConsecutiveUnits) {
                maxConsecutiveUnits = consecutiveUnits;
            }
        }
        else {
            consecutiveUnits = 0;
        }
    }

    return maxConsecutiveUnits;
};

console.log(getConsecutiveUnits([1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1]));