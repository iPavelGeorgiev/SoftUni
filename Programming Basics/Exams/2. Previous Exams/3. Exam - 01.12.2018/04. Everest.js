function everest(input) {
    let rest = input.shift();
    let meters = Number(input.shift());
    let metersPassed = 5364;
    let days = 1;

    while (rest != "END") {
        if (rest == "Yes") {
            days++;
        }

        if (metersPassed >= 8848 || days > 5) {
            break;
        }

        metersPassed += meters;

        rest = input.shift();
        meters = Number(input.shift());
    }

    if (metersPassed >= 8848 && days <= 5) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!\n${metersPassed}`);
    }
}

everest(['Yes', '1254', 'Yes', '1402', 'No', '250', 'Yes', '635'])