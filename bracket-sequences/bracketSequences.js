let bracketQuantity = 3;
let bracketIndex = 0;
let bracketDifference = 0;
const result = [];

const generateBracketSequence = (bracketQuantity, result, bracketIndex, bracketDifference) => {
    if (bracketDifference <= bracketQuantity - bracketIndex - 2) {
        result[bracketIndex] = '(';
        generateBracketSequence(bracketQuantity, result, bracketIndex + 1, bracketDifference + 1);
    }
    if (bracketDifference > 0) {
        result[bracketIndex] = ')';
        generateBracketSequence(bracketQuantity, result, bracketIndex + 1, bracketDifference - 1);
    }
    if (bracketIndex === bracketQuantity) {
        if (!bracketDifference) {
            console.log(result.join(''));
        }
    }
};

generateBracketSequence(bracketQuantity * 2, result, bracketIndex, bracketDifference);