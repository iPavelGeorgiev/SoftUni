function onTimeForTheExam(input) {
    let hourExam = +(input.shift());
    let minExam = +(input.shift());
    let hourCome = +(input.shift());
    let minCome = +(input.shift());

    let hourInMinsExam = (hourExam * 60) + minExam;
    let hourInMinsCome = (hourCome * 60) + minCome;
    let different = Math.abs(hourInMinsExam - hourInMinsCome);
    let difHours = Math.trunc(different / 60);
    let difMins = different % 60;
    
    if (hourInMinsExam < hourInMinsCome) {
        console.log(`Late`);
        if (difHours < 1) {
            console.log(`${difMins} minutes after the start`);
        } else if (difHours > 0) {
            if (difMins < 10) {
                console.log(`${difHours}:0${difMins} hours after the start`);
            } else {
                console.log(`${difHours}:${difMins} hours after the start`);
            }
        }
    } else if (hourInMinsCome === hourInMinsExam || different <= 30) {
        if (hourInMinsCome === hourInMinsExam) {
            console.log(`On time`);
        } else {
            console.log(`On time`);
            if (difHours < 1) {
                console.log(`${difMins} minutes before the start`);
            } else if (difHours > 0) {
                if (difMins < 10) {
                    console.log(`${difHours}:0${difMins} hours before the start`);
                } else {
                    console.log(`${difHours}:${difMins} hours before the start`);
                }
            }
        }

    } else if (hourInMinsExam > hourInMinsCome && different > 30) {
        console.log(`Early`);
        if (difHours < 1) {
            console.log(`${difMins} minutes before the start`);
        } else if (difHours > 0) {
            if (difMins < 10) {
                console.log(`${difHours}:0${difMins} hours before the start`);
            } else {
                console.log(`${difHours}:${difMins} hours before the start`);
            }
        }
    }
}

onTimeForTheExam([9, 30, 9, 50])