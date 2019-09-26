function listOfProducts(input) {
    let products = input.sort();
    let print = "";
    
    let productsList = products.forEach((element, index) => {
        print += `${index + 1}.${element}\n`;
    })

    console.log(print);
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])