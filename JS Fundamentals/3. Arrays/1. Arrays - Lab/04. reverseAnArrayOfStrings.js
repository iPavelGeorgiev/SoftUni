function reverseAnArrayOfStrings(elements) {
    for (let i = 0; i < elements.length / 2; i++) {
        let leftElement = elements[i];
        let rightElement = elements.length - 1 - i;
        
        elements[i] = elements[rightElement];
        elements[rightElement] = leftElement;
    }

    console.log(elements.join(" "));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])