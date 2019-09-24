function printDNA(length) {
    let characters = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
    let print = "";
    let counter = 1;

    for (let i = 0; i < length; i++) {
        if (characters.length <= 0) {
            characters.push("A", "T", "C", "G", "T", "T", "A", "G", "G", "G");
        }

        let a = characters.shift();
        let b = characters.shift();

        if (counter == 1) {
            print += `**${a}${b}**\n`;
            counter++;
        } else if (counter == 2) {
            print += `*${a}--${b}*\n`;
            counter++;
        } else if (counter == 3) {
            print += `${a}----${b}\n`;
            counter++;
        } else {
            print += `*${a}--${b}*\n`;
            counter = 1;
        }
    }

    console.log(print);
}

printDNA(10)