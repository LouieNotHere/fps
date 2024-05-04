setInterval(() => {
  var r = 150000000;
  var s = performance.now();
  for (let i = r; i > 0; i--) {}
  const e = performance.now();
  const ms = e - s;
  const cPr = 2;
  const sp = (r / ms / 1000000) * cPr;
  var f = sp * 100;

  document.getElementById("fps").innerHTML = Math.trunc(f) + " FPS";

  displayCreator("Louie Kurenai", "creator", 2024);
}, 1000);

window.onload = function() {
  displayCreator("Louie Kurenai", "creator", 2024);
}

function displayCreator(a, b, c) {
  var date = new Date();
  var year = date.getFullYear();

  document.getElementById(b).innerHTML = a + " @ " + year;

  // if it's above the specified year
  if (year > c) {
    document.getElementById(b).innerHTML = a + " @ " + c + " - " + year;
  }
}