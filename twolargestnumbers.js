function sumOfTwoLargest(input) {
    if (!Array.isArray(input) || input.length < 2) {
        return "Error: Input must be an array with at least two numbers.";
    }

    const maximum1 = Math.max(...input);
    const index = input.indexOf(maximum1);
    input.splice(index, 1);

    const maximum2 = Math.max(...input);

    return maximum1 + maximum2;
}

console.log(sumOfTwoLargest([32, 66, 80, 120, 45]))