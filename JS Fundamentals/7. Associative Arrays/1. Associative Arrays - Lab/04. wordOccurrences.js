function wordOccurrences(input) {
    let words = new Map();

    for (const word of input) {
        if (!words.has(word)) {
            words.set(word, 1);
        } else {
            let currSequence = words.get(word);
            let newSequence = currSequence + 1;
            words.set(word, newSequence);
        }
    }

    let iterate = Array.from(words).sort((a, b) => b[1] - a[1]);

    for (const [word, sequence] of iterate) {
        console.log(`${word} -> ${sequence} times`);
    }
}

wordOccurrences(
    [ 'Here',
  'is',
  'the',
  'first',
  'sentence',
  'Here',
  'is',
  'another',
  'sentence',
  'And',
  'finally',
  'the',
  'third',
  'sentence' ]
)