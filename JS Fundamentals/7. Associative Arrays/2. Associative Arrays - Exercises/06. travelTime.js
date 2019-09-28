function travelTime(input) {
    let destinations = {}

    for (const line of input) {
        let [country, city, cost] = line.split(" > ");
        cost = Number(cost);

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {}
   
        }

        if (!destinations[country].hasOwnProperty(city)) {
            destinations[country][city] = cost
        } else if (cost < destinations[country][city]) {
            destinations[country][city] = cost;
        }
    }

    let sortedDestinations = Object.entries(destinations)
    .sort(sortCountries);

    for (const [country, cities] of sortedDestinations) {
        let sortedCities = Object.entries(cities).sort(sortCities);
        let output = `${country} -> `;

        for (const [city, price] of sortedCities) {
            output += `${city} -> ${price} `;
        }
        
        console.log(output);
    }

    function sortCountries(firstCountry, secondCountry) {
        let firstName = firstCountry[0];
        let secondName = secondCountry[0];

        return firstName.localeCompare(secondName)
    }

    function sortCities(firstCity, secondCity) {
        let firstPrice = firstCity[1];
        let secondPrice = secondCity[1];

        return firstPrice - secondPrice
    }
}

travelTime(
    ["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]
)