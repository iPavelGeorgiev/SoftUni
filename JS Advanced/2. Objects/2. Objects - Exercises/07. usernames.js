function usernames(catalogue) {
   let uniqueUsernames = [...new Set(catalogue)]
   let sortedCatalogue = uniqueUsernames
      .sort((a, b) => a.length - b.length || a.localeCompare(b));
   
   return sortedCatalogue.join("\n");
}

console.log(usernames(
   [
      'Ashton', 'Kutcher',
      'Ariel', 'Lilly',
      'Keyden', 'Aizen',
      'Billy', 'Braston'
   ]
));