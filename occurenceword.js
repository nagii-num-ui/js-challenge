function findNumberOfOccurrence(sentence, searchTerm) {
    if (typeof sentence !== 'string' || typeof searchTerm !== 'string') {
        return "Input Invalid";
    }

    let count = 0;
    let sentenceLength = sentence.length;
    let searchLength = searchTerm.length;

    for (let i = 0; i <= sentenceLength - searchLength; i++) {
        if (sentence.substring(i, i + searchLength) === searchTerm) {
            count++;
        }
    }

    return count;
}

console.log(findNumberOfOccurrence("be kind whenever possible. kindness is what matters", "kind"));


