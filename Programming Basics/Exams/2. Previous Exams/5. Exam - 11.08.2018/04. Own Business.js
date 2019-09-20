function ownBusiness(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());
    let freeSpace = width * length * height
    let spaceForComputers = 0;
    let nComputers = input.shift();

    while (nComputers != "Done") {
        spaceForComputers += Number(nComputers);

        if (spaceForComputers > freeSpace) {
            break;
        }

        nComputers = input.shift();
    }

    freeSpace -= spaceForComputers;

    if (freeSpace >= 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
}

ownBusiness(['10', '10', '2', '20', '20', '20', '20', '122'])