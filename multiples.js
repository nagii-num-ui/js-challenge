function getMultiples(value, times) {
    if (typeof value !== "number" || typeof times !== "number") {
        console.log("Error: Both inputs must be numbers.");
        return;
    }

    let results = [];
    for (let i = 1; i <= times; i++) {
        results[i - 1] = value * i;
    }

    return results;
}

console.log(getMultiples(2, 5));
//console.log(getMultiples("2", 8)); 
