function cats(arr) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(" ");
        let [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));
    }

    for (let i = 0; i < cats.length; i++) {
        let pairValues = Object.values(cats[i]);

        console.log(`${pairValues[0]}, age ${pairValues[1]} says Meow`);
    }
}

cats(['Mellow 2', 'Tom 5'])