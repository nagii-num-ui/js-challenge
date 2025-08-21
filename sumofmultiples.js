function sumOfMultiples(value, times) {
    if (typeof value !== "number" || typeof times !== "number") {
        console.log("Error: Both inputs must be numbers.");
        return;
    }

    let results = [];
    let total = 0;

    for (let i = 1; i <= times; i++) {
        let multiple = value * i;
        results[i - 1] = multiple;  
        total += multiple;
    }

    let output = "";
    for (let j = 0; j < results.length; j++) {
        output += results[j];
        if (j < results.length - 1) {
            output += " ";
        }
    }

    console.log(output, "=", total);
}

sumOfMultiples(5, 5);
sumOfMultiples(8, 3);
//sumOfMultiples(1125353, 2043535);
