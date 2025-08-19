function groupWordsByFirstLetter(words) {
    if (!Array.isArray(words)) {
        return "Error: Input must be an array.";
    }

    
    words.sort();

    
    let currentGroup = [];
    let currentLetter = "";

    for (const word of words) {
        const firstLetter = word[0].toLowerCase();

        if (firstLetter !== currentLetter) {
            if (currentGroup.length > 0) {
                console.log(currentGroup); // 
            }
            currentGroup = [word];
            currentLetter = firstLetter;
        } else {
            currentGroup.push(word);
        }
    }

    
    if (currentGroup.length > 0) {
        console.log(currentGroup);
    }
}


const words =  ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"];
groupWordsByFirstLetter(words);
