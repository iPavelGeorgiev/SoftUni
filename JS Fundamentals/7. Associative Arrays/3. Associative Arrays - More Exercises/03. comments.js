function comments(input) {
   let usersArr = [];
   let articlesObj = {};

   for (const command of input) {
       let [firstWord, ...rest] = command.split(" ");

       if (firstWord === "user") {
           addUser(command);
       } else if (firstWord === "article") {
           addArticle(command);
       } else {
           saveTheInfo(command);
       }
   }

   let sorted = Object.entries(articlesObj).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);

   for (const line of sorted) {
       let currentArticle = line[0];
       console.log(`Comments on ${currentArticle}`);
       let usersObj = line[1];
       let sortable = Object.entries(usersObj).sort((a, b) => a[0].localeCompare(b[0]));
       sortable.forEach(element => {
           let currentUsername = element[0];
           let commentPairsObj = element[1]

           for (const key in commentPairsObj) {
               let value = commentPairsObj[key];
               console.log(`--- From user ${currentUsername}: ${key} - ${value}`);
           }
       });
   }

   function addUser(command) {
       let userName = command
           .split(" ")
           .slice(1)
           .join(" ");
       if (!usersArr.includes(userName)) {
           usersArr.push(userName);
       }
   }

   function addArticle(command) {
       let articleName = command
           .split(" ")
           .slice(1)
           .join(" ");
       articlesObj[articleName] = {};
   }

   function saveTheInfo(command) {
       let userArticlePair = command.split(": ")[0];
       let commentPair = command.split(": ")[1];
       let [user, article] = userArticlePair.split(" posts on ");
       let [commentTitle, commentContent] = commentPair.split(", ");
       if (usersArr.includes(user) && articlesObj.hasOwnProperty(article)) {
           articlesObj[article][user] = {};
           articlesObj[article][user][commentTitle] = commentContent;
       }
   }
}

comments(
   [ 'user aUser123',
  'someUser posts on someArticle: NoTitle, stupidComment',
  'article Books',
  'article Movies',
  'article Shopping',
  'user someUser',
  'user uSeR4',
  'user lastUser',
  'uSeR4 posts on Books: I like books, I do really like them',
  'uSeR4 posts on Movies: I also like movies, I really do',
  'someUser posts on Shopping: title, I go shopping every day',
  'someUser posts on Movies: Like, I also like movies very much' ]
)