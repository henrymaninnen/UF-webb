const span = document.querySelector("span");
const btn = document.querySelector("button");

var array = [5, 150, 34, 400, 5123, 6, 7, 85];
var högst = Math.min(...array);

console.log(högst);
btn.addEventListener("click", function () {

span.textContent = högst;
})