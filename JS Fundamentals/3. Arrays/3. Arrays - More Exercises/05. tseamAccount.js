function tseamAccount(input) {
    let accountGames = input.slice(0, 1).join().split(" ");
    let commands = input.slice(1);

    while (commands[0] != "Play!") {
        let action = commands[0].split(" ");

        if (action[0] === "Install" && 
        accountGames.includes(action[1]) === false) {
            accountGames.push(action[1]);

        } else if (action[0] === "Uninstall" &&
        accountGames.includes(action[1]) === true) {
            accountGames.splice(accountGames.indexOf(action[1]), 1);

        } else if (action[0] === "Update" && 
        accountGames.includes(action[1]) === true) {
            accountGames.splice(accountGames.indexOf(action[1]), 1);
            accountGames.push(action[1]);

        } else if (action[0] === "Expansion") {
            let game = action[1].substring(0, action[1].indexOf("-"));
            let expansion = action[1].substring(action[1].indexOf("-") + 1);

            if (accountGames.includes(game) === true) {
                accountGames.splice(accountGames.indexOf(game) + 1, 0, `${game}:${expansion}`);
            }
        }

        commands.shift();
    }

    console.log(accountGames.join(" "));
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])