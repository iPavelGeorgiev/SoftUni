function passwordValidator(password) {
    let isDigit = (asciiCode) => asciiCode >= 48 && asciiCode <= 57;

    let validLength = hasValidLength();
    let validContent = hasValidContent();
    let validDigits = hasValidDigits();

    if (!validLength) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!validContent) {
        console.log("Password must consist only of letters and digits");
    }
    
    if (!validDigits) {
        console.log("Password must have at least 2 digits");
    }

    if (validLength && validContent && validDigits) {
        console.log("Password is valid");
    }

    function hasValidLength() {
        return password.length >= 6 && password.length <= 10;
    }

    function hasValidContent() {
        let lowercasePass = password.toLowerCase();
        let isLetter = (asciiCode) => asciiCode >= 97 && asciiCode <= 122;

        for (let i = 0; i < lowercasePass.length; i++) {
            let ascii = lowercasePass.charCodeAt(i);

            if (!((isLetter(ascii)) || (isDigit(ascii)))) {
                return false;
            }
        }

        return true;
    }

    function hasValidDigits() {
        let digitsCount = 0;

        for (let i = 0; i < password.length; i++) {
            let ascii = password.charCodeAt(i);

            if (isDigit(ascii)) {
                digitsCount++;
            }
        }

        return digitsCount >= 2
    }
}

passwordValidator('logIn')