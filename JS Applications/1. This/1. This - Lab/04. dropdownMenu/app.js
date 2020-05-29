function solve() {
    const dropdownBtn = document.getElementById("dropdown");
    const dropdownUL = document.getElementById("dropdown-ul");
    const box = document.getElementById("box");

    dropdownBtn.addEventListener("click", function () {
        if (dropdownUL.style.display === "block") {
            dropdownUL.style.display = "none";
            box.style.backgroundColor = "";
        } else {
            dropdownUL.style.display = "block";
        }
    });

    dropdownUL.addEventListener("click", function (e) {
        const color = e.target.textContent;
        box.style.backgroundColor = color;
    })
}