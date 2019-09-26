function houseParty(input) {
    let list = [];

    input.forEach(element => {
        let name = element.substring(0, element.indexOf("is") - 1);
        let answer = element.substring(element.indexOf("is"));

        if (answer === "is going!") {
            if (!list.includes(name)) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (list.includes(name)) {
                list.splice(list.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    })

    console.log(list.join("\n"));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])