function solve() {
    const selectMenuTo = document.querySelector("#selectMenuTo");

    // Create TO options: Binary and Hexadecimal
    (function () {
        const binary = document.createElement("option");
        binary.textContent = "Binary";
        binary.value = "binary";

        const hexadecimal = document.createElement("option");
        hexadecimal.textContent = "Hexadecimal";
        hexadecimal.value = "hexadecimal";

        selectMenuTo.appendChild(binary);
        selectMenuTo.appendChild(hexadecimal);
    })();

    const convertBtn = document.querySelector("#container > button");
    convertBtn.addEventListener("click", convert);

    function convert() {
        const number = Number(document.querySelector("#input").value);
        const convertToValue = selectMenuTo.value
        const resultBox = document.querySelector("#result");
        let result;

        // Convert decimal to binary or decimal to hexadecimal
        if (convertToValue == "binary") {
            result = (number >>> 0).toString(2)
        } else if (convertToValue == "hexadecimal") {
            result = number.toString(16).toUpperCase();
        }

        if (result !== undefined) {
            resultBox.value = result;
        }
    }
}
