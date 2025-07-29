/*   
Replace any numbers in a string to a character passed to the function
Input: replaceNumbers("arun@123", "d");
Output: arun@ddd    
 */

function ReplaceNumbers(input,replacenumwithstring){
    let output = "";
    for (let i=0; i<input.length; i++){
        if (input[i] >= "0" && input[i] <="9") {
            output += replacenumwithstring;
        } else {
            output += input[i];
        }
    }
    return output;
}

console.log(ReplaceNumbers("arun@123", "d"));