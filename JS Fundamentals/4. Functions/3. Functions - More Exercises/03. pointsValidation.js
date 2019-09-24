function pointsValidation(input) {
    let [x1, y1, x2, y2] = input;

    let first = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    
    if (Number.isInteger(first)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let second = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    
    if (Number.isInteger(second)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let third = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    
    if (Number.isInteger(third)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([2, 1, 1, 1])