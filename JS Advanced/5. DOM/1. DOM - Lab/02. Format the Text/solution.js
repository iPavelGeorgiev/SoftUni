function solve() {
  const input = document.getElementById("input").textContent.split(".");
  const output = document.getElementById("output");

  while (input.length > 0) {
    let newP = document.createElement("p");

    for (let i = 0; i < input.length; i++) {
      if (input[i] && i < 3) {
        newP.textContent += input.shift() + ".";
      } else {
        input.shift();
        break;
      }
    }

    output.appendChild(newP);
  }
}