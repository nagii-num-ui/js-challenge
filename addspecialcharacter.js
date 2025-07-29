/*Create a function add the special character "@" at the end of each recurring character "c" in a string
Input: "cat in the bag"
Output: "c@t in the bag"*/


function replaceWord(sentence, oldWord, newWord) {
  return sentence.split(oldWord).join(newWord);
}
const sentence = 'cat in the bag';
const modifiedoutput = replaceWord(sentence, 'cat', 'c@t');
console.log(modifiedoutput);