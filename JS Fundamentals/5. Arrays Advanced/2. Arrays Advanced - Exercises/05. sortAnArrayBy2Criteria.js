function sortAnArrayBy2Criteria(input) {
    input.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });

    console.log(input.join("\n"));
} 

sortAnArrayBy2Criteria(["alpha", "beta", "gamma"])