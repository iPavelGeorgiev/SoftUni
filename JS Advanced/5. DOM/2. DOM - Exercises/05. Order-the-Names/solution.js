function solve() {
    const input = document.querySelector("#exercise > article > input[type=text]");
    let output = document.querySelector("#exercise > div > ol").children;
    const addBtn = document.querySelector("#exercise > article > button");

    addBtn.addEventListener("click", function () {
        let name = input.value.toLowerCase().replace(/^\w/, c => c.toUpperCase());
        let firstLetterPos = Math.abs(65 - name.charCodeAt(0));
        let li = output[firstLetterPos];
        
        if (li.textContent === "") {
            li.textContent += name;
        } else {
            li.textContent += `, ${name}`;
        }
    })
}