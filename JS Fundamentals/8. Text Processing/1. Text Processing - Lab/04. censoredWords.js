function censoredWords(text, word) {
    let old;

    while (old !== text) {
        old = text;
        text = text.replace(word, '*'.repeat(word.length));
    }

    console.log(text);
}

censoredWords("A small sentence with some words", "small")