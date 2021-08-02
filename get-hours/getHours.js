const getHours = hoursIntervals => {
    const hours = new Set();
    hoursIntervals.forEach(item => {
        for (let i = item[0]; i <= item[1]; i++) {
            hours.add(i);
        }
    });

    const result = [];
    for (let i = 9; i <= 19; i++) {
        if (!hours.has(i)) {
            result.push(i);
        }
    }

    return result;
}

// [2, 6] => [2, 3, 4, 5, 6]

const hours = [
    [9, 10],
    [15, 17],
    [14, 16]
];

// => 11, 12, 13, 18, 19

console.log(getHours(hours));