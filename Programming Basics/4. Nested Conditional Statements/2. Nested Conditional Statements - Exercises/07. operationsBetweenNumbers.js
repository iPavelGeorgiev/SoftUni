function operationsBetweenNumbers(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operator = input.shift();

    let result = 0;
    let output = "";

    switch (operator) {
        case "+":
            result = n1 + n2;
            output += `${n1} ${operator} ${n2} = ${result}`;
            break;
        case "-":
            result = n1 - n2;
            output += `${n1} ${operator} ${n2} = ${result}`;
            break;
        case "*":
            result = n1 * n2;
            output += `${n1} ${operator} ${n2} = ${result}`;
            break;
        case "/":
            result = n1 / n2;
            output += `${n1} ${operator} ${n2} = ${result.toFixed(2)}`;
            break;
        case "%":
            result = n1 % n2;
            output += `${n1} ${operator} ${n2} = ${result}`;
            break;
    }

    if (operator === "/" || operator === "%") {
        if (n2 === 0) {
            output = `Cannot divide ${n1} by zero`;
        }
    } else if (operator === "+" || operator === "-" || operator === "*") {
        if (result % 2 == 0) {
            output += ` - even`;
        } else {
            output += ` - odd`;
        }
    }
    console.log(output);
}

operationsBetweenNumbers([10, 12, "+"])
operationsBetweenNumbers([10, 1, "-"])
operationsBetweenNumbers([7, 3, "*"])
operationsBetweenNumbers([123, 12, "/"])
operationsBetweenNumbers([10, 0, "%"])