function digitsWithWords(digitWord) {
    let convert;
    
    switch (digitWord) {
        case "zero":
            convert = 0;
            break;

        case "one":
            convert = 1;
            break;

        case "two":
            convert = 2;
            break;

        case "three":
            convert = 3;
            break;

        case "four":
            convert = 4;
            break;

        case "five":
            convert = 5;
            break;

        case "six":
            convert = 6;
            break;

        case "seven":
            convert = 7;
            break;

        case "eight":
            convert = 8;
            break;

        case "nine":
            convert = 9;
            break;
    }

    console.log(convert);
}

digitsWithWords('nine')