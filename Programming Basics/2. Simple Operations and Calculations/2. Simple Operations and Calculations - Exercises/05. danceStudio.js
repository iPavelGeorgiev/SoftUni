function danceStudio(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let wardrobeA = Number(input.shift());
    let studioSize = (length * 100) * (width * 100);
    let wardrobe = (wardrobeA * 100) * (wardrobeA * 100);
    let bench = studioSize / 10;
    let freeSpace = studioSize - wardrobe - bench;
    let dancersNumber = freeSpace / (40 + 7000);
    console.log(Math.floor(dancersNumber));
}

danceStudio(['50', '25', '2'])