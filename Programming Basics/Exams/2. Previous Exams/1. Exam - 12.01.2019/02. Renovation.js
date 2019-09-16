function renovation(input) {
    let budget = Number(input.shift());
    let floorWidth = Number(input.shift());
    let floorLength = Number(input.shift());
    let triangleSide = Number(input.shift());
    let triangleHight = Number(input.shift());
    let oneTilePrice = Number(input.shift());
    let moneyForWorkman = Number(input.shift());

    let floorSize = floorWidth * floorLength;
    let tileArea = triangleSide * triangleHight / 2;
    let tileNeeded = Math.ceil(floorSize / tileArea) + 5;
    let totalMoneyNeeded = budget - ((tileNeeded * oneTilePrice) + moneyForWorkman);

    if (totalMoneyNeeded < 0) {
        console.log(`You'll need ${Math.abs(totalMoneyNeeded).toFixed(2)} lv more.`);
    } else {
        console.log(`${totalMoneyNeeded.toFixed(2)} lv left.`);
    }
}

renovation([500, 3, 2.5, 0.5, 0.7, 7.80, 100])