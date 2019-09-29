function extractEmails(input) {
   let pattern = /(?<email>(?<=\s)(?:[a-z]+|\d+)(?:\w+|\.+|\-+)(?:[a-z]+|\d+)\@[a-z]+\-?[a-z]+\.[a-z]+(?:\.[a-z]+)?)/g
   
   while ((email = pattern.exec(input[0])) !== null) {
      console.log(email.groups.email);
   }
}

extractEmails(
   [ 'Please contact us at: support@github.com.', 'end' ]
)