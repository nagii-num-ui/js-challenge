function convertUsPhoneFormat(number) {
    if (typeof number !== "number" || !Number.isInteger(number)) {
        console.log( "Error: Input must be a integer number.");
        return false;
    }

    // Convert to string
    let digitstoString = number.toString();

    // Ensure it has exactly 10 digits
    if (digitstoString.length !== 10) {
        console.log("Error: Input must be exactly 10 digits.");
        return false;
    }

    // Build the phone format
    let output = "";
    for (let i = 0; i < digitstoString.length; i++) {
        if (i === 0) output += "(";  
        if (i === 3) output += ") "; 
        if (i === 6) output += "-";  

        output += digitstoString[i];
    }

    return `"${output}"`; 
}

// console.log(convertUsPhoneFormat(9876543210)); 
 console.log(convertUsPhoneFormat("9876543"));
// console.log(convertUsPhoneFormat(98765));
// console.log(convertUsPhoneFormat(9876543210233));


