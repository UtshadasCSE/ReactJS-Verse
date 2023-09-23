let arr = [];
let increment = 0;
let dis = document.getElementById("show");

while (increment < 10000) {
  arr.push(++increment);
}
dis.innerHTML = arr.join(" ");
