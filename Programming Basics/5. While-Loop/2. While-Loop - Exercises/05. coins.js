function coins(input) {
    let coins = Number(input.shift());
    let lv = Math.floor(coins);
    let st = Math.floor((coins * 100) - (lv * 100));
    let counter = 0;

    while (lv > 0) {

        if(lv >= 2) {
            lv -= 2;
            counter++;
        } else if (lv >= 1) {
            lv -= 1;
            counter++;
        }
    }

    while (st > 0) {

        if(st >= 50) {
            st -= 50;
            counter++;
        } else if (st >= 20) {
            st -= 20;
            counter++;
        } else if (st >= 10) {
            st -= 10;
            counter++;
        } else if (st >= 5) {
            st -= 5;
            counter++;
        } else if (st >= 2) {
            st -= 2;
            counter++;
        } else if (st >= 1) {
            st -= 1;
            counter++;
        }
    }
    console.log(counter);
}

coins([1.23])