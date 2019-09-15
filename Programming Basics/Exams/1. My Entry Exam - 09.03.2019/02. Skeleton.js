function skeleton(input) {
    let controlMin = Number(input.shift());
    let controlSec = Number(input.shift());
    let chuteLength = Number(input.shift());
    let secFor100m = Number(input.shift());

    let controlTotal = controlMin * 60 + controlSec;
    let delay = chuteLength / 120;
    let reducedTime = delay * 2.5;
    
    let martinTime = (chuteLength / 100) * secFor100m - reducedTime;

    if (martinTime <= controlTotal) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${martinTime.toFixed(3)}.`);
    } else {
        let notEnough = martinTime - controlTotal;
        console.log(`No, Marin failed! He was ${notEnough.toFixed(3)} second slower.`);
    }
}

skeleton([2, 12, 1200, 10])
