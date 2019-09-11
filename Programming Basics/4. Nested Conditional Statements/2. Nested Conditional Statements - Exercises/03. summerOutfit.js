function summerOutfit(input) {
    let degrees = Number(input.shift());
    let timeOfDay = input.shift();
    let outfit;
    let shoes;

    if (timeOfDay === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (timeOfDay === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (degrees >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit([16, "Morning"])