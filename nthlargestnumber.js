function findLargest(input, n) {
    if (!Array.isArray(input) || typeof n !== 'number') {
        return "Error: Invalid input. Expected an array and a number.";
    }

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] < input[j]) {
                let temporaryVariable = input[i];
                input[i] = input[j];
                input[j] = temporaryVariable;
            }
        }
    }

    if (n > 0 && n <= input.length) {
        return input[n - 1]; 
    } else {
        return "Error: n is out of range.";
    }
}

console.log(findLargest([3, 4, 5, 6, 88], 2));  
console.log(findLargest([3, 4], 3));           
console.log(findLargest("hello", 2));          

