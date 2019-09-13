function latinLetters() {
    let a = "a".charCodeAt(0);
    let z = "z".charCodeAt(0);
    
    for (let i = a; i <= z; i++) {
        console.log(String.fromCharCode(i));
    }
}

latinLetters()