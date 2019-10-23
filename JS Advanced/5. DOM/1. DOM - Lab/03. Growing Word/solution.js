function growingWord() {
  const p = document.querySelector("#exercise p");
  const colors = {
    "": "blue",
    "blue": "green",
    "green": "red",
    "red": "blue"
  }

  let fontSize = p.style.fontSize;
  fontSize === ""
  ? p.style.fontSize = 2 + "px" 
  : p.style.fontSize = parseInt(fontSize) * 2 + "px";

  let pColor = p.style.color;
  p.style.color = colors[pColor];
}