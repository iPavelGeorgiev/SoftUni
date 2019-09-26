function airPollution(arr1, arr2) {
   let mapOfSofia = arr1;
   let forecast = arr2;
   let map = []
   for (let a = 0; a < mapOfSofia.length; a++) {
       let row = mapOfSofia[a]
       row = row.split(' ')
       map.push(row)
   }

   let breeze = 0
   let gale = 0
   let smog = 0
   for (let j = 0; j < map.length; j++) {
       let rowEvery = map[j]
       rowEvery = rowEvery.map(x => Number(x))
       map[j] = rowEvery
       rowEvery = [...[]]
   }
   for (let c = 0; c < forecast.length; c++) {
       let command = forecast[c]
       command = command.split(' ')
       if (command[0] == 'breeze') {
           breeze = Number(command[1])
           let breezeRow = map[breeze]
           breezeRow = breezeRow.map(x => x - 15)
           map[breeze] = breezeRow
       }
       else if (command[0] == 'gale') {
           gale = Number(command[1])
           for (let i = 0; i < map.length; i++) {
               let rowNow = map[i]
               let z = rowNow[gale]
               z -= 20
               rowNow[gale] = z
               map[i] = rowNow
           }

       }
       else if (command[0] == 'smog') {
           smog = Number(command[1])
           for (let e = 0; e < map.length; e++) {
               let xyz = map[e]
               for (let f = 0; f < xyz.length; f++) {
                   let everyIndex = xyz[f]
                   everyIndex += smog
                   map[e][f] = everyIndex
               }
           }
       }
   }

   let print = []
   let isTrue = false
   for (let o = 0; o < map.length; o++) {
       let xy = map[o]
       for (let p = 0; p < xy.length; p++) {
           if (xy[p] >= 50) {
               let forprint = `[${o}-${p}]`
               print.push(forprint)
               isTrue = true
           }
       }
   }
   if (isTrue === true) {
       console.log(`Polluted areas: ${print.join(', ')}`)
   }
   else {
       console.log(`No polluted areas`)
   }
}

airPollution(
   [ '5 7 72 14 4',
  '41 35 37 27 33',
  '23 16 27 42 12',
  '2 20 28 39 14',
  '16 34 31 10 24' ], [ 'breeze 1', 'gale 2', 'smog 25' ]
)