function loginReverse(inputArray) {
    let stringToReverse = inputArray.shift();
    let reversedString = stringToReverse.split('').reverse().join('');
    let nextAttempt = '';
    let attemptsCounter = 0;
    while (nextAttempt != reversedString && attemptsCounter <= 4) {
        attemptsCounter++;
        nextAttempt = inputArray.shift();
        if (nextAttempt === reversedString) {
            console.log(`User ${stringToReverse} logged in.`);
            break;
        }
        if (attemptsCounter === 4) {
            console.log(`User ${stringToReverse} blocked!`);
            break;
        }
        console.log(`Incorrect password. Try again.`);
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])