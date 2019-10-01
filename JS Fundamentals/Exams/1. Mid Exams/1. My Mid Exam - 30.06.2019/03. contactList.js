function contactList(input) {
    let contacts = input.shift().split(" ");

    for (let command of input) {
        command = command.split(" ")
        
        if (command[0] === "Add") {
            let find = contacts.indexOf(command[1]);

            if (find === -1) {
                contacts.push(command[1]);
            } else if (find !== -1) {
                let index = Number(command[2]);
                if (index >= 0 && index <= contacts.length) {
                    contacts.splice(index, 0, command[1]);
                }
            } 
        } else if (command[0] === "Remove") {
            let index = Number(command[1]);

            if (contacts[index] !== undefined) {
                contacts.splice(index, 1);
            }
        } else if (command[0] === "Export") {
            let startIndex = Number(command[1])
            let finalCount = Number(command[2]);
            let count = 0;
            let print = [];

            for (let i = startIndex; i < contacts.length; i++) {
                if (count === finalCount) {
                    break;
                }

                count++;
                print.push(contacts[i]);
            }
            console.log(print.join(" "));
        } else if (command[0] === "Print") {
            if (command[1] === "Normal") {
                console.log(`Contacts: ${contacts.join(" ")}`);
                break;
            } else if (command[1] === "Reversed") {
                contacts.reverse();
                console.log(`Contacts: ${contacts.join(" ")}`)
                break;
            }
        }
    }
}

contactList(
    [ 'Zayn Katy Ariana Avril Nick Mikolas',
  'Remove 3',
  'Add Jacob 0',
  'Export 0 3',
  'Export 3 8',
  'Print Reversed' ]
)