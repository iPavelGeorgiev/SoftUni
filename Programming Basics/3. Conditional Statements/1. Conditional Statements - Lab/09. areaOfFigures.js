function areaOfFigures(input) {
    let figureTypes = input.shift();
    let a = Number(input.shift());
    let b = Number(input.shift());
    let result;

    switch (figureTypes) {
        case "square":
            result = a * a
            break;
        case "rectangle":
            result = a * b
            break;
        case "circle":
            result = Math.PI * (a * a)
            break;
        case "triangle":
            result = (a * b) / 2
            break;
    }
    console.log(result.toFixed(3))
}

areaOfFigures(["circle", 6])