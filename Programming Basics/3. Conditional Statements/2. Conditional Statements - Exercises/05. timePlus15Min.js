function timePlus15Min(input) {
    let startHrs = Number(input.shift());
    let startMins = Number(input.shift());
    let totalTime = startHrs * 60 + startMins + 15;
    let hrs = Math.floor(totalTime / 60);
    let mins = totalTime % 60

    if (hrs >= 24) {
        hrs = 0
    }

    if (mins < 10) {
        console.log(`${hrs}:0${mins}`);
    } else {
        console.log(`${hrs}:${mins}`)
    }
}

timePlus15Min([1, 46])