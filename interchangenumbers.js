function swapNumbers(swapping, index1,index2) {
    [swapping[index1],swapping[index2]] = [swapping[index2], swapping[index1]];
    return swapping;
}

//let numbers = [10,20,30,40,50];
let numbers = ["banana","apple",45]
swapNumbers(numbers,1,2);
console.log(numbers)


