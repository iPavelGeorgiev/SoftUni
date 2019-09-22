function englishNameOfTheLastDigit(num) {
    let toText = num.toString()
    let lastChar = toText.charAt(toText.length-1);
    let spellDigit = "";

    if (lastChar == "0") {
        spellDigit = "zero";
    } else if (lastChar == "1") {
        spellDigit = "one";
    } else if (lastChar == "2") {
        spellDigit = "two";
    } else if (lastChar == "3") {
        spellDigit = "three";
    } else if (lastChar == "4") {
        spellDigit = "four";
    } else if (lastChar == "5") {
        spellDigit = "five";
    } else if (lastChar == "6") {
        spellDigit = "six";
    } else if (lastChar == "7") {
        spellDigit = "seven";
    } else if (lastChar == "8") {
        spellDigit = "eight";
    } else if (lastChar == "9") {
        spellDigit = "nine";
    }

    console.log(spellDigit)
}

englishNameOfTheLastDigit(512)