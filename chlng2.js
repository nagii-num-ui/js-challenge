let sumofdigit = 96472;
let start = 0;
let num = sumofdigit.toString();
for (let i = 0; i < num.length; i++) {
   start = start + Number(num[i]);
}
console.log("Sum of digits in a number: " + start)

