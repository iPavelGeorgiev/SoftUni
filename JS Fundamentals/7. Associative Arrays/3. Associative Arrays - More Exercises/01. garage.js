function garage(input) {
    let garagesMap = new Map()
 
    for (let row of input) {
        let rowArr = row.split(' - ')
        let garage = rowArr[0]
        let carKeyValues = rowArr[1]
        let availableCars = []
 
        if (!garagesMap.has(garage)) {
            availableCars.push(carKeyValues)
            garagesMap.set(garage, availableCars)
 
        } else {
            availableCars = garagesMap.get(garage)
            availableCars.push(carKeyValues)
            garagesMap.set(garage, availableCars)
        }
    }
 
 
    let output = ''
    for (let [currGarage, currCarKeyValue] of [...garagesMap.entries()]) {
        output += `Garage № ${currGarage}\n`
 
        for (let currCarProperties of currCarKeyValue) {
 
            for (let everySymbol of currCarProperties) {
                currCarProperties = currCarProperties.replace(': ', ' - ')
            }
 
            output += `--- ${currCarProperties}\n`
        }
    }
  
    console.log(output);
}

garage(
   [ '1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat' ]
)