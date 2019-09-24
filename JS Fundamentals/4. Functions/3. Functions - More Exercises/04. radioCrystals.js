function radioCrystals(input) {
    let chunkQuartz = input.shift();

    for (let i = 0; i < input.length; i++) {
        operations(chunkQuartz, input[i]);
    }

    function operations(targetThickness, chunkQuartz) {
        let beforeOperations = chunkQuartz;
        let cut, lap, grind, etch, xRay;
        cut = lap = grind = etch = xRay = 0;

        while (chunkQuartz > targetThickness || chunkQuartz + 1 == targetThickness) {
            if (chunkQuartz / 4 >= targetThickness) {
                chunkQuartz = Math.floor(chunkQuartz / 4);
                cut++;
            } else if (chunkQuartz * 0.80 >= targetThickness) {
                chunkQuartz = Math.floor(chunkQuartz * 0.80);
                lap++;
            } else if (chunkQuartz - 20 >= targetThickness) {
                chunkQuartz -= 20;
                grind++;
            } else if (chunkQuartz - 2 >= targetThickness) {
                chunkQuartz -= 2;
                etch++;
            } else if (xRay === 0) {
                chunkQuartz += 1;
                xRay++;
            }
        }
        print()

        function print() {
            console.log(`Processing chunk ${beforeOperations} microns`);

            if (cut > 0) {
                console.log(`Cut x${cut}`);
                console.log("Transporting and washing");
            }
            if (lap > 0) {
                console.log(`Lap x${lap}`);
                console.log("Transporting and washing");
            }
            if (grind > 0) {
                console.log(`Grind x${grind}`);
                console.log("Transporting and washing");
            }
            if (etch > 0) {
                console.log(`Etch x${etch}`);
                console.log("Transporting and washing");
            }
            if (xRay > 0) {
                console.log(`X-ray x${xRay}`);
            }

            console.log(`Finished crystal ${chunkQuartz} microns`);
        }
    }
}

radioCrystals([1375, 50000])