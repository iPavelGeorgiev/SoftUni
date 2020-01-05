function solve() {
   const word = document.getElementById("word");
   const text = document.getElementById("text");
   const result = document.getElementById("result");

   let arr = JSON.parse(text.value);
   const lookingWord = arr[0].split(' ')[2];

   arr = arr
      .map(x => x.replace(new RegExp(lookingWord, 'gim'), word.value))
      .map(x => `<p>${x}</p>`)
      .join('');

   result.innerHTML = arr;
}

function solve() {
   const word = document.getElementById("word");
   const text = document.getElementById("text");
   const result = document.getElementById("result");

   function replaceWord(str, arr) {
       arr = JSON.parse(arr);
       const lookingWord = arr[0].split(' ')[2];

       return arr
           .map(x => x.replace(new RegExp(lookingWord, 'gim'), str))
           .map(x => `<p>${x}</p>`)
           .join('');
   }
   
   result.innerHTML = replaceWord(word.value, text.value);
}