function changeColor(color) {
  document.body.style.background = color;
}

function changeColorParagraph(color) {
  document.getElementById("para").style.color = color;
}

function changeColorBtn(color, textColor) {
  document.getElementById("btn").style.background = color;
  document.getElementById("btn").style.color = textColor;
}

function changeTheme() {
  changeColor("black");
  changeColorBtn("white", "blue");
  changeColorParagraph("white");
  result.innerHTML = "Background Color changed";
}

function add(value) {
  value = value + 1;
  document.getElementById("quantity").innerHTML = value;
}

function result() {}
