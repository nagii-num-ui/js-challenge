/*for(let i=1; i<=10; i++){
    if(i%2==0) {
        console.log(i + " even number")
    }
    else(i%2!=0); {
        console.log(i +"odd number")
    }
}*/


/*Write a program that loops from 1 to 20 and:

If a number is divisible by 5, print "Fizz"

If it is not divisible by 5, print "Not Fizz"*/


/*for(let i=1; i<=20; i++){
    if(i%5==0) {
        console.log(i + "Fizz")
    }
    else {
        console.log(i + "Not Fizz")
    }
}*/

/*Write a program that checks numbers from 1 to 20, and:

If the number is divisible by 3, print "Divisible by 3"

If the number is divisible by 5, print "Divisible by 5"

If it’s not divisible by 3 or 5, print "Not divisible by 3 or 5"*/

/*for (let i=1; i<=20; i++){
    if(i%3==0) {
        console.log(i +" Divisible by 3 ")
    }
   else if(i%5==0) {
    console.log(i + "Divisible by 5")
   }
   else {
    console.log(i + " Not divisible by 3 or 5 ")
   }
}*/

/*Loop from 1 to 30, and:

If a number is divisible by both 3 and 5, print: "FizzBuzz"

If it's only divisible by 3, print: "Fizz"

If it's only divisible by 5, print: "Buzz"

Otherwise, print: "Not divisible by 3 or 5"*/

/*for (let i=1; i<=30; i++){
    if(i%3==0 && i%5==0) {
        console.log(i + " FizzBuzz")
    }
    else if(i%3==0) {
        console.log(i + " Fizz ")
    }
    else if (i%5==0) {
        console.log(i + "Buzz")
    }
    else {
        console.log(i + "Not divisible by 3 & 5")
    }
}*/

/*Input: "numentica ui internship"
Output: 21*/

/*let sum=0;
for (let i=1; i<=100; i++){
    if(i%2!==0)
        sum = sum + i;
    {
        console.log("Total Sum of Odd Numbers:", sum)
    }
}*/


/*let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {       // check if i is odd
    sum = sum + i;         // add i to sum
  }
}

console.log("Total Sum of Odd Numbers:", sum);*/


/*let sumofdigit = 96472;
let sum=0;

let string = sumofdigit.toString();

for(let i=1;i<string.length; i++){
    sum = sum + i;
    sum = sum + Number(str[i]);
}

console.log("Sum of digits in a number :" +sum)*/


/*let numberofletters = "numentica ui internship";
console.log(numberofletters.length)*/

l/*et numberofletters = "numentica ui internship";
let start=0;
for(i=0;i<numberofletters.length; i++){ 
    start++
console.log(start)}*/

//Input: [-14, 4, 5, -2, 76]

let array =  [-14, 4, 5, -2, 76]
let output = [];
for(let i =1; i < array.length;i++)
if(array[i] >=0) {
output.push(array[i]);
}
console.log(output)







