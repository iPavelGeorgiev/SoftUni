function dungeonestDark(input) {
    let health = 100;
    let coins = 0;

    let strInput = String(input);
    let arrRooms = strInput.split("|");
    let currRoom = "";

    for (let i = 0;i < arrRooms.length; i++) {
        let currRoom = arrRooms[i];
    
        let first = currRoom.substring(0, currRoom.indexOf(" "));
        let second = Number(currRoom.substring(currRoom.indexOf(" ") + 1));
    
        if (first == "potion") {
          health += second;
          let healed = second;

          if (health > 100) {
            healed -= (health - 100);
            health = 100;
          }

          console.log(`You healed for ${healed} hp.`);
          console.log(`Current health: ${health} hp.`);
        } else if (first == "chest") {
          coins += second;
          console.log(`You found ${second} coins.`);

        } else {
          health -= second;

          if (health > 0) {
            console.log(`You slayed ${first}.`);
          } else {
            console.log(`You died! Killed by ${first}.`);
            console.log(`Best room: ${i + 1}`);
            return;
          }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")