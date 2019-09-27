function movies(input) {
    let movies = [];

    input.forEach(line => {
        let tokens = line.split(" ");

        if (tokens.includes("addMovie")) {
            let movieName = tokens.slice(1).join(" ");

            movies.push({ name: movieName });
        } else if (tokens.includes("directedBy")) {
            let index = tokens.indexOf("directedBy");

            let movieName = tokens.slice(0, index).join(" ");
            let movieDirector = tokens.slice(index + 1).join(" ");
            let movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.director = movieDirector;
            }
        } else if (tokens.includes("onDate")) {
            let index = tokens.indexOf("onDate");

            let movieName = tokens.slice(0, index).join(" ");
            let movieDate = tokens.slice(index + 1)[0];
            let movie = movies.find(m => m.name === movieName);

            if (movie) {
                movie.date = movieDate;
            }
        }
    })

    movies.forEach(m => {
        let key = Object.keys(m);

        if (key.length === 3) {
            console.log(JSON.stringify(m));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])