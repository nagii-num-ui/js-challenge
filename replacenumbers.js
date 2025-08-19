function replaceNumbers(input, replacenumwithstring) {
    if (typeof input !== 'string') {
        return "Error: Input must be a string.";
    }
    if (typeof replacenumwithstring !== 'string') {
        return "Error: Replacement must be a string.";
    }

    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= "0" && input[i] <= "9") {
            output += replacenumwithstring;
        } else {
            output += input[i];
        }
    }
    return output;
}

console.log(replaceNumbers("arun@123", "d")); 
console.log(replaceNumbers(8384499, "d")); 
console.log(replaceNumbers("arun@123", 6778)); 

