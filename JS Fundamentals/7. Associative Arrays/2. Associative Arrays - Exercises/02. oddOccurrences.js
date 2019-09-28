function oddOccurrences(input) {
    let words = {}

    input.split(" ").forEach(word => {
        word = word.toLowerCase();
        if (!words.hasOwnProperty(word)) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    })

    let output = "";

    for (const [word, sequence] of Object.entries(words)) {
        if (sequence % 2 !== 0 && sequence !== 0) {
            output += `${word} `
        }    
    }

    console.log(output);
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')