function addPrefixSuffix(words,prefix,suffix) {
    let outputPrefixSuffix = [];
    for(let i=0; i <words.length; i++) {
        outputPrefixSuffix.push(prefix + words[i] );
        outputPrefixSuffix.push(words[i] + suffix);
    }
    return outputPrefixSuffix;
}

let words = ["arun", "charles"];
let PrefixSuffix = addPrefixSuffix(words,"Mr", "Jr");

console.log(PrefixSuffix)