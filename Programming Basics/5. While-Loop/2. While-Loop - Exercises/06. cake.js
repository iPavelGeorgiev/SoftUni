function cake(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let cakeSize = width * length;
    let cakePiece = "";
    let cakeLeft = 0;

    while (cakePiece != "STOP") {
        cakePiece = input.shift();

        if (isNaN(cakePiece)) {
            break;
        } else if (cakePiece != "STOP") {
            cakeLeft += Number(cakePiece);
        }
    }

    let final = cakeSize - cakeLeft;

    if (final <= 0) {
        console.log(`No more cake left! You need ${Math.abs(final)} pieces more.`);
    } else {
        console.log(`${final} pieces are left.`);
    }
}

cake([10, 2, 2, 4, 6, "STOP"])