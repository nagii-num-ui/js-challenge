function numberToWords(inputNumber) {
    if (typeof inputNumber !== "number" || !Number.isInteger(inputNumber)) {
        console.log("Error: Input must be an integer.");
        return;
    }

    const numberWords = ["zero","one","two","three","four","five","six","seven","eight","nine"];

    // Convert number into a string so we can loop through each digit character
    let stringVersionOfNumber = String(inputNumber);
    let finalSentence = "";

    // Loop through each character in the string
    for (let position = 0; position < stringVersionOfNumber.length; position++) {
        // Convert the character (like "3") into a real number (3)
        let currentDigit = parseInt(stringVersionOfNumber[position]);

        // Add the matching word from the numberWords array
        finalSentence += numberWords[currentDigit] + " ";
    }

    console.log(finalSentence.trim());
}

numberToWords(90);
numberToWords(23334);
numberToWords("2334")

