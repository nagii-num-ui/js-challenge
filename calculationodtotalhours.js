function calculateTotalHoursElapsed(startTimeString, endTimeString) {
    if (typeof startTimeString !== "string" || typeof endTimeString !== "string") {
        console.log("Error: Both inputs must be strings.");
        return;
    }

    //  Helper: Convert string time "hh:mm AM/PM" to total minutes 
    function convertToMinutes(timeString) {
        let hourString = "";
        let minuteString = "";
        let meridianString = "";
        let foundColon = false;
        let foundSpace = false;

        // Extract hour, minute, meridian manually
        for (let index = 0; index < timeString.length; index++) {
            let currentCharacter = timeString[index];

            if (!foundSpace) {
                if (currentCharacter === ":") {
                    foundColon = true;
                } else if (currentCharacter === " ") {
                    foundSpace = true;
                } else {
                    if (!foundColon) {
                        hourString += currentCharacter;
                    } else {
                        minuteString += currentCharacter;
                    }
                }
            } else {
                meridianString += currentCharacter;
            }
        }

        // Convert hourString to number
        let hours = 0;
        for (let index = 0; index < hourString.length; index++) {
            let digit = hourString[index] - "0"; // char → number
            hours = hours * 10 + digit;
        }

        // Convert minuteString to number
        let minutes = 0;
        for (let index = 0; index < minuteString.length; index++) {
            let digit = minuteString[index] - "0"; 
            minutes = minutes * 10 + digit;
        }

        // Handle AM/PM conversion
        if (meridianString === "PM" && hours !== 12) {
            hours = hours + 12;
        }
        if (meridianString === "AM" && hours === 12) {
            hours = 0; // midnight
        }

        return hours * 60 + minutes; // total minutes since midnight
    }

    // --- Convert both times ---
    let startMinutes = convertToMinutes(startTimeString);
    let endMinutes = convertToMinutes(endTimeString);

    // --- Calculate difference ---
    let totalMinutesPassed = endMinutes - startMinutes;
    if (totalMinutesPassed < 0) {
        totalMinutesPassed += 24 * 60; // handle next day
    }

    // Extract hours
    let elapsedHours = 0;
    while (totalMinutesPassed >= 60) {
        elapsedHours++;
        totalMinutesPassed -= 60;
    }

    // Remaining minutes
    let elapsedMinutes = totalMinutesPassed;

    // --- Format Output ---
    if (elapsedMinutes === 0) {
        console.log(elapsedHours + " Hour");
    } else if (elapsedHours === 0) {
        console.log(elapsedMinutes + " Minutes");
    } else {
        console.log(elapsedHours + " Hour " + elapsedMinutes + " Minutes");
    }
}
calculateTotalHoursElapsed("9:00 AM", "10:00 AM");  
calculateTotalHoursElapsed("9:00 AM", "3:12 PM");    
calculateTotalHoursElapsed("11:45 PM", "1:15 AM");   
