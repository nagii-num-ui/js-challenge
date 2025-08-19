function addSpecialCharacterafterC(input) {
    if (typeof input !== 'string') {
        return "Error: Input must be a string.";
    }

    let output = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'c'|| input[i] === 'C') {
            output += input[i] + '@';
        } else {
            output += input[i];
        }
    }

    return output;
}

console.log(addSpecialCharacterafterC("Cat in the bag")); 
console.log(addSpecialCharacterafterC(56484.6348)); 
console.log(addSpecialCharacterafterC(346348));               
console.log(addSpecialCharacterafterC(true));             
