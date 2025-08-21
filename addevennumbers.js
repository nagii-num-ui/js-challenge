function addEvenNumbers(numbers) {
    // check type
    if (!Array.isArray(numbers)) {
        console.log("Error: Input must be an array of numbers.");
        return;
    }

    let total = 0;
    let output = "";

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i]; 

        if (typeof number === "number" && number % 2 === 0) {
            total += number;

        
            output += number;
            if (i < numbers.length - 1) {
                output += " ";
            }
        }
    }

    console.log(output, "=", total);
}

addEvenNumbers([38, 3, 2, 8, 31])
//addEvenNumbers(38, 3, 2, 8, 31)
//addEvenNumbers[38.4, 3, 2.5, 8.2, 31]

