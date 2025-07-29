/*Find the largest number in an array according to input
Input: findLargest([3, 4, 5, 6, 88], 2) // Note here the second argument is 2, so the function to find the second largest number in array
findLargest([3, 4, 5, 6, 88], 4) // Note here the second argument is 4, so the function to find the fourth largest number in array
*/

function findLargestNumber(input, n) {
    const sorted = [...input].sort((a, b) => b - a);
    return sorted[n - 1];
}
console.log(findLargestNumber([3, 4, 5, 6, 88], 2));
console.log(findLargestNumber([3, 4, 5, 6, 88], 4));