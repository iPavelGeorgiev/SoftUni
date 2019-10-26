function toggle() {
    const content = document.getElementById("extra");
    const span = document.getElementsByClassName("button")[0];

    if (span.textContent === "More") {
        span.textContent = "Less";
        content.style.display = "block";
    } else {
        span.textContent = "More";
        content.style.display = "none";
    }
}