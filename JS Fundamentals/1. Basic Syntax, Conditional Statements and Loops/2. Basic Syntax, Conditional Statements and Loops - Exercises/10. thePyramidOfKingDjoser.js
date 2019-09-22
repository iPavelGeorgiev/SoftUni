function thePyramidOfKingDjoser(base, increment) {
    let steps = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    for (let i = base; i > 0; i -= 2) {
        steps++

        if (i - 2 <= 0) {
            gold = (i * i) * increment;
        } else if (steps % 5 == 0 && steps != 0) {
            stone += ((i - 2) * (i - 2)) * increment;
            lapis += ((i * 4) - 4) * increment;
        } else {
            stone += ((i - 2) * (i - 2)) * increment;
            marble += ((i * 4) - 4) * increment;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}

thePyramidOfKingDjoser(11, 0.75)