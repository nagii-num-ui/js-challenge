const tuple1 = [1,3,33,8];
const tuple2 = [76,8,13,54];
const commonNumber =[];

for(let i=0; i< tuple1.length; i++) {
    for(let j=0; j< tuple2.length; j++) {
        (tuple1[i] === tuple2[j] )  && commonNumber.push(tuple1[i]);
    }
}
console.log(commonNumber)