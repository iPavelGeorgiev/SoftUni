function city(name, area, population, country, postCode) {
    let cities = {
        name,
        area,
        population,
        country,
        postCode
    }

    for (let propt in cities) {
        if (cities.hasOwnProperty(propt)) {
            console.log(`${propt} -> ${cities[propt]}`);
        }
    }
}

city("Sofia"," 492", "1238438", "Bulgaria", "1000")