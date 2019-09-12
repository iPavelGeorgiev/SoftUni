function oldBooks(input) { 
    let favoriteBook = input.shift();
    let booksCounted = Number(input.shift());
    let search = "";
    let counter = 0;

    while (counter < booksCounted) {
        search = input.shift();
        
        if (search == favoriteBook) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        }

        counter++
    }
    if (search != favoriteBook) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}

oldBooks(["The Spot", 4, "Hunger Games", "Harry Potter", "Torronto", "Spotify"])