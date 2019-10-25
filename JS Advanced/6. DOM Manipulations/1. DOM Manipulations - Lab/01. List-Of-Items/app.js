function addItem() {
    const table = document.getElementById("items");
    const input = document.getElementById("newItemText").value;

    let li = document.createElement("li");
    li.textContent = input;

    table.appendChild(li);
}