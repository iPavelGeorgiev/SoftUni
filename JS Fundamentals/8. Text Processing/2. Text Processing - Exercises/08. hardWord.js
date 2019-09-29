function hardWord(input) {
    let text = input[0];
    let arr = input[1];
    let lowerCaseLength = 0;
    let isLower = false;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "_") {
            lowerCaseLength++;
            isLower = true;
        } else if (isLower === true && text[i] !== "_") {
            isLower = false;
            
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].length === lowerCaseLength) {
                    text = text.replace("_".repeat(lowerCaseLength), arr[j])
                    arr.splice(j, 1);
                    break;
                }
            }
            lowerCaseLength = 0;
        }
    }

    console.log(text);
}

hardWord(
   ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)