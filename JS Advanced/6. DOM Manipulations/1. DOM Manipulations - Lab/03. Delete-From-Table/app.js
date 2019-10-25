function deleteByEmail() {
    const input = document.querySelector("input[type=text]");
    const output = document.getElementById("result");
    let isFound = false;

    [...document.getElementsByTagName("tr")].forEach(e => {
        let email = e.lastElementChild.textContent;

        if (email === input.value) {
            e.parentElement.removeChild(e);
            isFound = true;
        }
    })

    if (isFound) {
        output.textContent = "Deleted.";
    } else {
        output.textContent = "Not found.";
    }

    input.value = "";
}