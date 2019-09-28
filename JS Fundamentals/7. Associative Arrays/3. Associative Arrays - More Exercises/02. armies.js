function armies(input) {
   let armies = new Map();

   for (command of input) {
       if (command.includes('arrives')) {
           let nameLeader = command.substr(0, (command.length - 8));
           if (!armies.has(nameLeader)) {
               armies.set(nameLeader, []);
           }
       } else if (command.includes(': ')) {
           let [nameLeader, armyAndCount] = command.split(': ');
           let [army, count] = armyAndCount.split(', ');
           count = Number(count);
           if (armies.has(nameLeader)) {
               let currentArmy = armies.get(nameLeader);
               currentArmy.push([`${army} - ${count}`])
               armies.set(nameLeader, currentArmy);
           }
       } else if (command.includes(' defeated')) {
           let nameLeader = command.substr(0, (command.length - 9));
           if (armies.has(nameLeader)) {
               armies.delete(nameLeader);
           }
       } else if (command.includes(' + ')) {
           let [newArmy, newCount] = command.split(' + ');
           newCount = Number(newCount);
           let leaders = [...(armies.keys())];
           for (let nameLeader of leaders) {
               if (armies.has(nameLeader)) {
                   let currentArmy = armies.get(nameLeader);
                   for (let armyAndCount in currentArmy) {
                       let [army, count] = String(currentArmy[armyAndCount]).split(' - ');
                       count = Number(count);
                       if (army === newArmy) {
                           count += newCount;
                           currentArmy.splice(armyAndCount, 1, [`${army} - ${count}`]);
                           armies.set(nameLeader, currentArmy);
                           break;
                       }
                   }
               }
           }

       }
   }

   let result = [...(armies.entries())];
   result.sort(sortLeaders);

   function sortLeaders(a, b) {
       let powerA = 0;
       let powerB = 0;
       for (let itema of a[1]) {
           powerA += Number(String(itema).split(' - ')[1]);
       }
       for (let itemb of b[1]) {
           powerB += Number(String(itemb).split(' - ')[1]);
       }
       if (powerA > powerB) {
           return -1;
       } else if (powerA < powerB) {
           return 1;
       }
   }

   for (let lieder of result) {
       let armyLieder = lieder[1];
       armyLieder.sort(armySort);

       function armySort(a, b) {
           let powerA = Number(String(a).split(' - ')[1]);
           let powerB = Number(String(b).split(' - ')[1]);
           if (powerA > powerB) {
               return -1;
           } else if (powerA < powerB) {
               return 1;
           }
       }

   }

   for (let lieder of result) {
       let power = 0;

       for (let item of lieder[1]) {
           for (let army of item) {
               power += Number(String(army).split(' - ')[1]);
           }
       }

       console.log(`${lieder[0]}: ${power}`);

       for (let item of lieder[1]) {
           console.log(`>>> ${item}`);
       }
   }
}

armies(
   [ 'Rick Burr arrives',
  'Fergus: Wexamp, 30245',
  'Rick Burr: Juard, 50000',
  'Findlay arrives',
  'Findlay: Britox, 34540',
  'Wexamp + 6000',
  'Juard + 1350',
  'Britox + 4500',
  'Porter arrives',
  'Porter: Legion, 55000',
  'Legion + 302',
  'Rick Burr defeated',
  'Porter: Retix, 3205' ]
)