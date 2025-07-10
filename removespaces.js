const string = "	fox i  n the b ox  	";
let removeSpaceInaString = "";

for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
         removeSpaceInaString += string[i];
    }
}
console.log(removeSpaceInaString)