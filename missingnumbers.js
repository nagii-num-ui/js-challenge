function findMissingNumbers(input) {
    if (!Array.isArray(input)) {
        return "Error: Input must be an array.";
    }

    input.sort((a, b) => a - b);  

    let missing = [];

    for (let i = 0; i < input.length - 1; i++) {
        let current = input[i];
        let next = input[i + 1];

        for (let num = current + 1; num < next; num++) {
            missing.push(num);
        }
    }

    if (missing.length === 0) {
        return "No numbers are missing.";
    }

    return missing;
}


console.log(findMissingNumbers([77]));
// console.log(findMissingNumbers("68,71,69,73"));
// console.log(findMissingNumbers(68,71,69,73));

