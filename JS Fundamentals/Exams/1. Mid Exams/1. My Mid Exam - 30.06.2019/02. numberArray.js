function numberArray(input) {
    let numbers = input.shift().split(" ").map(Number);
    let command = input.shift();

    let positiveNumbers = [];

    while (command !== "End") {
        command = command.split(" ");

        if (command[0] === "Switch") {
            let index = Number(command[1]);
            let sign = Math.sign(numbers[index]);

            if (numbers[index] !== undefined) {
                if (sign === -1) {
                    numbers[index] *= -1;
                } else if (sign === 1) {
                    numbers[index] *= -1;
                }
            }
        } else if (command[0] === "Change") {
            let indexNum = Number(command[1]);
            let newValue = Number(command[2])

            if (numbers[indexNum] !== undefined) {
                numbers.splice(indexNum, 1, newValue);
            }
        } else if (command[0] === "Sum") {
            command = command.join(" ");

            if (command === "Sum Negative") {
                let sum = 0;

                for (let i = 0; i < numbers.length; i++) {
                    let number = Math.sign(numbers[i]);

                    if (number === -1) {
                        sum += numbers[i];
                    }
                }
                console.log(sum);
            } else if (command === "Sum Positive") {
                let sum = 0;

                for (let i = 0; i < numbers.length; i++) {
                    let number = Math.sign(numbers[i]);

                    if (number === 1) {
                        sum += numbers[i];
                    }
                }
                console.log(sum);
            } else if (command === "Sum All") {
                let sum = 0;

                for (let i = 0; i < numbers.length; i++) {
                    sum += numbers[i];
                }

                console.log(sum);
            }
        }

        command = input.shift();
    }

    numbers.forEach(num => {
        let sign = Math.sign(num);

        if (sign === 1 || num === 0) {
            positiveNumbers.push(num);
        }
    })

    console.log(positiveNumbers.join(" "));
}

numberArray(
    [ '1 2 3 4 5 4 3 2 1 0',
  'Switch -4',
  'Change 13 0',
  'Switch 0',
  'Sum All',
  'End' ]
)