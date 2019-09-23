function primeNumberChecker(number) {
    for(var i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

let print = primeNumberChecker(7)

console.log(print);