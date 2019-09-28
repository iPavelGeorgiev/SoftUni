function wordTracker(input) {
    let map = new Map();

    let specialWords = input.shift().split(" ");

    for (const word of specialWords) {
        map.set(word, 0)
    }

    for (const word of input) {
        if (map.has(word)) {
            let currValue = map.get(word);
            let newValue = currValue + 1;
            map.set(word, newValue);
        }
    }

    let iterate = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (const [word, count] of iterate) {
        console.log(`${word} - ${count}`);
    }
}

wordTracker(
    [ 'this sentence',
  'In',
  'this',
  'sentence',
  'you',
  'have',
  'to',
  'count',
  'the',
  'occurances',
  'of',
  'the',
  'words',
  'this',
  'and',
  'sentence',
  'because',
  'this',
  'is',
  'your',
  'task' ]
)