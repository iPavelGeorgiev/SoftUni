const fs = require("fs")
const path = require("path")
const dbPath = path.join(__dirname, "..", 'config/database.json');

const saveCube = (cube, cb) => {
    getCubes((cubes) => {
        cubes.push(cube);
        fs.writeFile(dbPath, JSON.stringify(cubes, null, 2), err => {
            if (err) {
                throw err;
            }

            console.log("New cube is successfully stored");
            cb();
        });
    })
}

const getCubes = (cb) => {
    fs.readFile(dbPath, (err, dbData) => {
        if (err) {
            throw err;
        }

        const cubes = JSON.parse(dbData);
        cb(cubes);
    });
}

const getCube = (id, cb) => {
    getCubes(cubes => {
      const cube = cubes.filter(c => c.id === id)[0]
      cb(cube)
    })
  }

module.exports = {
    getCubes,
    getCube,
    saveCube
}