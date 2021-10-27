var btnDarkMode = document.querySelector("#btn-darkmode");
var btnRätta = document.querySelector("#rätta");
var body = document.querySelector("body");


btnDarkMode.addEventListener("click", function () {
    body.classList.toggle("toggle-darkmode")
    if (body.classList == "toggle-darkmode") {
        btnDarkMode.innerHTML = "Lightmode";
      } else {
        btnDarkMode.innerHTML = "Darkmode";
      }
})

btnRätta.addEventListener("click", function () {            
  var räknare = 0;
  var ele = document.index.qst1.value;
 console.log(ele);
  if (ele === "aik"){räknare++} {
  }

})
