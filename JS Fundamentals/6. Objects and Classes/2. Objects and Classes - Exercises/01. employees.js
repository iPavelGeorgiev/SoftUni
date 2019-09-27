function employees(arr) {
    let list = {};

    for (let person of arr) {
        let personalNum = person.length;

        list[person] = personalNum;
    }

    for (let person in list) {
        console.log(`Name: ${person} -- Personal Number: ${list[person]}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])