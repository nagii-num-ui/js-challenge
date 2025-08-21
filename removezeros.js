function removeZeros(input, mode) {
    if (typeof input !== "string") {
        console.log("Error: input must be a string");
        return;
    }
    if (mode !== "leading" && mode !== "trailing") {
        console.log("Error: mode must be 'leading' or 'trailing'");
        return;
    }

    let result = "";

    if (mode === "leading") {
        let start = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== '0') {
                start = i;
                break;
            }
        }

        for (let i = start; i < input.length; i++) {
            result += input[i];
        }
    } else if (mode === "trailing") {
        let end = input.length - 1;

        for (let i = input.length - 1; i >= 0; i--) {
            if (input[i] !== '0') {
                end = i;
                break;
            }
        }
        for (let i = 0; i <= end; i++) {
            result += input[i];
        }
    }

    console.log(result);
}

// Example usage
let testValue = "000000123423423000";

removeZeros(testValue, "leading");   
removeZeros(testValue, "trailing");     
removeZeros(testValue, "middle");  