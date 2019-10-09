function emojiSumator(input) {
   let string = input[0];
   let emojiLookingFor = input[1].split(':').map(el => String.fromCharCode(el)).join('');
   let pattern = /(?:[\s]){1}(?<name>[:][a-z]{4,}[:])(?=[\s,.!?]){1}/g;
   let foundEmojies = [];
   let multiplicatePower = 1;
   let totalPower = 0;

   while ((emoji = pattern.exec(string)) !== null) {
       foundEmojies.push(`${emoji.groups.name}`);
       totalPower += emoji.groups.name.substring(1, emoji.groups.name.length - 1).split('').map(el => el.charCodeAt()).reduce((a, b) => a + b, 0);
       if (`:${emojiLookingFor}:` === emoji.groups.name) {
           multiplicatePower = 2;
       }
   }
   if (foundEmojies.length > 0) {
       console.log(`Emojis found: ${foundEmojies.join(', ')}`);
       console.log(`Total Emoji Power: ${totalPower * multiplicatePower}`);
   } else {
       console.log(`Total Emoji Power: ${totalPower * multiplicatePower}`);
   }
}

emojiSumator(
   [ 'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
  '115:101:118:101:110' ]
)