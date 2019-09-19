function maidenParty(input) {
    let mP = Number(input.shift());
    let first = Number(input.shift());
    let second = Number(input.shift());
    let third = Number(input.shift());
    let fourth = Number(input.shift());
    let fifth = Number(input.shift());

    let sumArticles= (first * 0.60) + (second * 7.2) + (third * 3.60) + (fourth * 18.20) + (fifth * 22);
    let numArticles = first + second + third + fourth + fifth;

    if (numArticles >= 25) {
        sumArticles*= 0.65;
    }

    sumArticles*= 0.9;
    sumArticles-= mP;

    if (sumArticles>= 0) {
        console.log(`Yes! ${sumArticles.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(sumArticles).toFixed(2)} lv needed.`);
    }
}

maidenParty([40.8, 20, 25, 30, 50, 10])