function convertToMinutes(timeString) {
    if (typeof timeString !== "string") {
        console.log("Error: Input must be a string in format H:MM");
        return;
    }

    let hourString = "";
    let minuteString = "";
    let foundColon = false;

    //  Extract hours and minutes manually 
    for (let index = 0; index < timeString.length; index++) {
        let currentCharacter = timeString[index];

        if (currentCharacter === ":") {
            if (foundColon) {
                console.log("Error: Invalid format (multiple colons).");
                return;
            }
            foundColon = true;
        } else {
            if (!foundColon) {
                hourString += currentCharacter;
            } else {
                minuteString += currentCharacter;
            }
        }
    }

    //  Validate colon existence
    if (!foundColon || hourString === "" || minuteString === "") {
        console.log("Error: Invalid format. Use H:MM (example: 2:30)");
        return;
    }

    //  Convert hourString to number 
    let hours = 0;
    for (let index = 0; index < hourString.length; index++) {
        let currentCharacter = hourString[index];
        if (currentCharacter < "0" || currentCharacter > "9") {
            console.log("Error: Hours must be numeric.");
            return;
        }
        let digit = currentCharacter - "0";
        hours = hours * 10 + digit;
    }

    //  Convert minuteString to number
    let minutes = 0;
    for (let index = 0; index < minuteString.length; index++) {
        let currentCharacter = minuteString[index];
        if (currentCharacter < "0" || currentCharacter > "9") {
            console.log("Error: Minutes must be numeric.");
            return;
        }
        let digit = currentCharacter - "0";
        minutes = minutes * 10 + digit;
    }

    //  Validate minutes
    if (minutes < 0 || minutes >= 60) {
        console.log("Error: Minutes must be between 0 and 59.");
        return;
    }

    // Calculate total minutes
    let totalMinutes = (hours * 60) + minutes;
    console.log(totalMinutes + " Minutes");
    return totalMinutes;
}

convertToMinutes("2:30");   
convertToMinutes("0:45");   
convertToMinutes("2:75");  
convertToMinutes("abc");
