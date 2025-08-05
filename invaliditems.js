 /*Given an array, filter out the invalid items
For example:
filterOut([“a”, “d”, 1, true, “cd”, 33], “number”);
Output [“a”, “d”, true, “cd”];
filterOut([“a”, “d”, 1, true, “cd”, 33], “boolean”);
Output [“a”, “d”, 1, “cd”, 33];
filterOut([“a”, “d”, 1, true, “cd”, 33], “string”);
Output [1, true, 33]; (*/


/*const filterOut = (input, typeToFilter) => input.filter(item => typeof item !== typeToFilter);
console.log(filterOut(["a", "d", 1, true, "cd", 33], "number"));*/ 

/*const filterOut = (input, typeToFilter) => input.filter(item => typeof item !== typeToFilter);
console.log(filterOut(["a", "d", 1, true, "cd", 33], "boolean"));*/

/*const filterOut = (input, typeToFilter) => input.filter(item => typeof item !== typeToFilter)
console.log(filterOut(["a", "d", 1, true, "cd", 33], "string"));*/

function filterOutByType(input, typeToFilter) {
  return input.filter(item => typeof item !== typeToFilter); //
}

const myInput = (["a", "d", 1, true, "cd", 33]);
const filteredNumbers = filterOutByType(myInput, "number");
console.log(filteredNumbers); 

// Filtering out "boolean" type
const filteredBooleans = filterOutByType(myInput, "boolean");
console.log(filteredBooleans); 

// Filtering out "string" type
const filteredStrings = filterOutByType(myInput, "string");
console.log(filteredStrings);









