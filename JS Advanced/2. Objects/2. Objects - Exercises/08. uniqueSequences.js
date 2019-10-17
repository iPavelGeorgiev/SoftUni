function uniqueSequences(input) {
    let arr = input
        .map(JSON.parse)
        .map(x => x.sort((a, b) => b - a).join(' '))
        .filter((x, i, a) => a.indexOf(x) === i)
        .map(x => x.split(' ').map(Number))
        .sort((a, b) => a.length - b.length)
       
    arr.forEach(x => {
        console.log(`[${x.join(', ')}]`)
    });
}

uniqueSequences(
   [
      '[-3, -2, -1, 0, 1, 2, 3, 4]',
      '[10, 1, -17, 0, 2, 13]',
      '[4, -3, 3, -2, 2, -1, 1, 0]'
   ]
)