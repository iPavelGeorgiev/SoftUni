function addItem() {
    const newItemText = document.getElementById("newItemText")
    const newItemValue = document.getElementById("newItemValue")

    let option = document.createElement("option");
    option.textContent = newItemText.value;
    option.setAttribute("value", newItemValue.value);

    document.getElementById("menu").appendChild(option);
    newItemText.value = "";
    newItemValue.value = "";
}