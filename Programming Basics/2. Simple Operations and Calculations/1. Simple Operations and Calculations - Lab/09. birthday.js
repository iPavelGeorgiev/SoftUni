function birthday(input){
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift());
    let capacity = length * width * height;
    let liters = capacity * 0.001;
    let calculatedPercent = percent * 0.01;
    let needed = liters * (1 - calculatedPercent);
    console.log(needed.toFixed(3));
  }

  birthday([85, 75, 47, 17])