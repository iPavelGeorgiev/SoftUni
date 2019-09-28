function piccolo(input) {
    let parkedCars = {};

    for (const car of input) {
        let tokens = car.split(", ");
        let direction = tokens[0];
        let idNum = tokens[1];

        if (!parkedCars.hasOwnProperty(idNum) && direction === "IN") {
            parkedCars[idNum] = direction;
        } else if (parkedCars.hasOwnProperty(idNum) && direction === "OUT") {
            delete parkedCars[idNum];
        }
    }

    let sortCars = Object.keys(parkedCars).sort();

    if (sortCars.length > 0) {
        for (const car of sortCars) {
            console.log(car);
        }
    } else {
        console.log("Parking Lot is Empty");
    }
}

piccolo(
    [ 'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU' ]
)