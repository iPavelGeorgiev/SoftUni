function celsiusToFahrenheit(input) {
    let c = Number(input.shift());
    let f = (1.8 * c) + 32;
    console.log(f.toFixed(2));
}

celsiusToFahrenheit(['25'])