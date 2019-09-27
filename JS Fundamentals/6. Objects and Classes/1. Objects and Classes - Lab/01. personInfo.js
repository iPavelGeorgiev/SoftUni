function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
}

personInfo("Peter", 
"Pan",
"20")