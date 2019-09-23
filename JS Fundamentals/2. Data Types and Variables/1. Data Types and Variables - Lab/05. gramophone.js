function Gramophone(brand, album, song) {
    let songDuration = brand.length * album.length * song.length / 2
    let rotations = songDuration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}

Gramophone('Black Sabbath', 'Paranoid', 'War Pigs')