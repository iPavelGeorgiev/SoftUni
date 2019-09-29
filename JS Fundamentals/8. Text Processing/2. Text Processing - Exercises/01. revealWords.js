function revealWords(words, text) {
    words = words.split(", ");
    text = text.split(" ");

    for (let i = 0; i < text.length; i++) {
        if (text[i].includes("*")) {
            for (let j = 0; j < words.length; j++) {
                if (words[j].length === text[i].length) {
                    text[i] = words[j];
                    words.splice(j, 1);
                }
            }
        }
    }

    text = text.join(" ");
    console.log(text)
}

revealWords('great', 'softuni is ***** place for learning new programming languages')