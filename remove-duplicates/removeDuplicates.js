const removeDuplicates = list => {
    return Array.from(new Set(list));
};

console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 4, 5, 6, 6]));