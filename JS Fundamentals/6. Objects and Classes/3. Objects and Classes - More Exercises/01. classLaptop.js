class Laptop {
   constructor(info, quality) {
       this.info = {
           "producer": info.producer,
           "age": info.age,
           "brand": info.brand
       },
           this.quality = Number(quality);
           this.isOn = false;
   }

   get price() {
      return  Number(800 - this.info.age * 2 + this.quality * 0.5);
   }
   showInfo() {
       return JSON.stringify(this.info);
   }
   turnOn() {
       this.isOn = true;
       this.quality -= 1;
   }
   turnOff() {
       this.isOn = false;
       this.quality -= 1;
   }
}

let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);