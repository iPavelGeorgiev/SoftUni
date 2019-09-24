function palindromeIntegers(numsArr) {
    let print = "";

    for (let element of numsArr) {
        element = String(element)
        let reverse = element.split("").reverse().join("");

        if (element == reverse) {
            print += "true\n";
        } else {
            print += "false\n";
        }
    }

    console.log(print);
}

palindromeIntegers([123,323,421,121])