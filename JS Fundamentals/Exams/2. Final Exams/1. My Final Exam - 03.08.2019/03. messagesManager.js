function messagesManager(input) {
   let maxMessages = Number(input.shift());
   let senders = {}
   let receivers = {}

   while ((line = input.shift()) !== "Statistics") {
      line = line.split("=");
      command = line[0];

      if (command === "Add") {
         let name = line[1];
         let sended = Number(line[2]);
         let received = Number(line[3]);

         if (!senders.hasOwnProperty(name)) {
            senders[name] = sended;
            receivers[name] = received;
         }
      } else if (command === "Message") {
         let sendUser = line[1];
         let receiveUser = line[2];

         if (senders.hasOwnProperty(sendUser) &&
          receivers.hasOwnProperty(receiveUser)) {
             senders[sendUser] += 1;
             receivers[receiveUser] += 1;

             if (senders[sendUser] + receivers[sendUser] >= maxMessages) {
                console.log(`${sendUser} reached the capacity!`);
                delete senders[sendUser];
                delete receivers[sendUser];
             }

             if (receivers[receiveUser] + senders[receiveUser] >= maxMessages) {
                console.log(`${receiveUser} reached the capacity!`);
                delete receivers[receiveUser];
                delete senders[receiveUser];
             }
          }
      } else if (command === "Empty") {
         let username = line[1];

         if (username === "All") {
            receivers = {}
            senders = {}
         } else if (senders.hasOwnProperty(username)) {
            delete senders[username];
            delete receivers[username];
         }
      }
   }
   
   let numUsers = Object.entries(senders).length;
   console.log(`Users count: ${numUsers}`);
   let entries = Object.entries(receivers)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach(kvp => {
         let user = kvp[0];
         let totalMsgs = senders[user] + receivers[user];

         console.log(`${user} - ${totalMsgs}`);
      })
}

messagesManager(
   [ '20',
  'Add=Mark=3=9',
  'Add=Berry=5=5',
  'Add=Clark=4=0',
  'Empty=Berry',
  'Add=Blake=9=3',
  'Add=Michael=3=9',
  'Add=Amy=9=9',
  'Message=Blake=Amy',
  'Message=Michael=Amy',
  'Statistics' ]
)