const word = "	fox i  n the b ox  	";
let removeSpaceInaWord = "";

for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ' ) {
         removeSpaceInaWord += word[i];
    }
}
console.log(removeSpaceInaWord)