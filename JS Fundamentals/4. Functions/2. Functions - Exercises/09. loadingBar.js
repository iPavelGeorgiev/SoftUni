function loadingBar(num) {
    let bar = [];
    for (let i = 1; i <= 10; i++) {
        if (i <= num / 10) {
            bar.unshift("%")
        } else {
            bar.push(".");
        }
    }

    if (num === 100) {
        console.log("100% Complete!");
        console.log(`[${bar.join("")}]`);
    } else {
        console.log(`${num}% [${bar.join("")}]`);
        console.log("Still loading...");
    }
}

loadingBar(30)