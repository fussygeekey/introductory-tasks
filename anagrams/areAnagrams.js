const areAnagrams = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }

    const counter = string => {
        const result = {};

        for (let i in string) {
            if (string[i] in result) {
                result[string[i]]++;
            }
            else {
                result[string[i]] = 0;
            }
        };

        return result;
    };

    aCounter = counter(a.trim().split(' ').join(''));
    bCounter = counter(b.trim().split(' ').join(''));

    for (let i in aCounter) {
        if (aCounter[i] === bCounter[i]) {
            delete bCounter[i];
        }
    }

    return !Object.values(bCounter).length;
};

console.log(areAnagrams('a bcd e', 'ab cde'));