// Find the characters that are repeating the most simaltaneously
// For example:
// charRepeating(“traaainngfornewbie”);




function findRepeatingCharacters(input) {
    if (typeof input !== "string") {
        console.log("Error: Input must be a string.");
        return;
    }

    //  Initialize tracking variables
    let maxLetter = "";
    let maxCount = 0;
    let currentLetter = "";
    let currentCount = 0;

    //  Loop through the string
    for (let i = 0; i < input.length; i++) {
        if (input[i] === currentLetter) {
            currentCount++;
        } else {
            // reset for new letter
            currentLetter = input[i];
            currentCount = 1;
        }

        // Check if this count is the highest so far
        if (currentCount > maxCount) {
            maxLetter = currentLetter;
            maxCount = currentCount;
        }
    }

    console.log(maxLetter, maxCount);
}

findRepeatingCharacters(838949);
findRepeatingCharacters("traaainngfornewbie");
findRepeatingCharacters("hellooooworld");

