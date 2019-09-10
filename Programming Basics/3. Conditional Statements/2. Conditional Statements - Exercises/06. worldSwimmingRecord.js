function worldSwimmingRecord(input) {
    let recordInSec = Number(input.shift());
    let distanceInM = Number(input.shift());
    let meterInMin = Number(input.shift());

    let swimmingRequired = distanceInM * meterInMin;
    let swimmingSlowDown = Math.floor(distanceInM / 15) * 12.5;
    let totalTime = (swimmingRequired + swimmingSlowDown);

    if (recordInSec > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        totalTime -= recordInSec
        console.log(`No, he failed! He was ${totalTime.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord([55555.67, 3017, 5.03])