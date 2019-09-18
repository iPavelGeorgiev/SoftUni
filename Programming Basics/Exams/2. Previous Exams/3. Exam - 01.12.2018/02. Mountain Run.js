function mountainRun(input) {
    let recordSeconds = Number(input.shift());
    let recordMeters = Number(input.shift());
    let secondsPerMeter = Number(input.shift());

    let competitorSeconds = recordMeters * secondsPerMeter;
    let slowdown = Math.floor(recordMeters / 50) * 30;
    competitorSeconds += slowdown;

    if (competitorSeconds < recordSeconds) {
        console.log(`Yes! The new record is ${competitorSeconds.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${Math.abs(competitorSeconds - recordSeconds).toFixed(2)} seconds slower.`);
    }
}

mountainRun([1377, 389, 3])