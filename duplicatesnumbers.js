function findDuplicatesNumbers(input) {
    if (!Array.isArray(input)) {
        return "Error: Input must be an array.";
    }

    input.sort((a, b) => a - b); 
    let duplicates = [];

    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] === input[i + 1] && !duplicates.includes(input[i])) {
            duplicates.push(input[i]);
        }
    }

    return duplicates.length > 0 ? duplicates : "No duplicates found.";
}


console.log(findDuplicatesNumbers(["1, 2, 3, 2, 4, 5, 3, 6"]));
console.log(findDuplicatesNumbers(1, 2, 3, 2, 4, 5, 3, 6));
console.log(findDuplicatesNumbers([1, 2.7, 3.6, 2.7, 4, 5, 3.6, 6]));