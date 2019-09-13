function salary(input) {
    let n = Number(input.shift());
    let salary = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let website = input.shift();

        if (website === "Facebook") {
            salary -= 150;
        }

        if (website === "Instagram") {
            salary -= 100;
        }

        if (website === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }

    if (salary > 0) {
        console.log(salary);
    }
}

salary([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])