function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");

    input.forEach(element => {
        let command = element.slice().split(" ");
        let name = command.shift();

        if (name === "Buy" && !inventory.includes(command[0])) {
            inventory.push(command[0]);
        } else if (name === "Trash") {
            let index = inventory.indexOf(command[0]);

            if (index !== -1) inventory.splice(index, 1);
        } else if (name === "Repair") {
            let index = inventory.indexOf(command[0]);

            if (index !== -1) {
                inventory.splice(index, 1);
                inventory.push(command[0]);
            }
        } else if (name === "Upgrade") {
            let itemType = command[0].substring(0, command[0].indexOf("-"));
            let upgradeType = command[0].substring(command[0].indexOf("-") + 1);

            if (inventory.includes(itemType)) {
                let index = inventory.indexOf(itemType);

                inventory.splice(index + 1, 0, `${itemType}:${upgradeType}`);
            }
        }
    })

    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear Bag',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])