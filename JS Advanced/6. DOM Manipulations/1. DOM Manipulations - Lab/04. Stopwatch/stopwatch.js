function stopwatch() {
    const startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", startTimer);

    const stopBtn = document.getElementById("stopBtn");
    stopBtn.addEventListener("click", stopTimer);

    const outputBox = document.getElementById("time");
    let timer;

    function startTimer() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        let seconds = 0;

        function add() {
            seconds++;
            let currentMinute = ('0' + Math.floor(seconds / 60)).slice(-2);
            let currentSecond = ('0' + seconds % 60).slice(-2);
            outputBox.textContent = `${currentMinute}:${currentSecond}`;

            tick();
        }

        function tick() {
            timer = setTimeout(add, 1000);
        }
        tick();
    }

    function stopTimer() {
        stopBtn.disabled = true;
        startBtn.disabled = false;
        clearTimeout(timer);
        outputBox.textContent = "00:00";
    }
}