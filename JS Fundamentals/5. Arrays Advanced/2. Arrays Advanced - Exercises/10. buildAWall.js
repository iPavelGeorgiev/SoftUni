function buildAWall(input) {
    let concretePerDay = [];
    let totalConcreteUsed = 0;

    input = input.map(Number);

    while(input.length > 0) {
        let daily = 0;

        for (let i = 0; i < input.length; i++) {
            if (input[i] >= 30) {
                input.splice(i, 1);
                i--;
            } else {
                input[i]++;
                daily += 195;
            }
        }

        if (daily > 0) {
            concretePerDay.push(daily);
            totalConcreteUsed += daily;
        }
    }

    let totalPrice = totalConcreteUsed * 1900;

    console.log(concretePerDay.join(", "));
    console.log(`${totalPrice} pesos`);
    
}

buildAWall(["21", "25", "28"])