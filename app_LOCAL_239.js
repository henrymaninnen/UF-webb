var btnDarkMode = document.querySelector("#btn-darkmode");
var btnRätta = document.querySelector("#rätta");
var body = document.querySelector("body");
var h2 = document.querySelector("h2");
var btnRefresh = document.querySelector("#reload");
const qst1 = document.getElementsByName("qst1");
const qst2 = document.getElementsByName("qst2");
const qst3 = document.getElementsByName("qst3");
const qst4 = document.getElementsByName("qst4");
const qst5 = document.getElementsByName("qst5");
const qst6 = document.getElementsByName("qst6");
const qst7 = document.getElementsByName("qst7");
const qst8 = document.getElementsByName("qst8");
const qst9 = document.getElementsByName("qst9");
const qst10 = document.getElementsByName("qst10");


//DARKMODE
btnDarkMode.addEventListener("click", function () {
    body.classList.toggle("toggle-darkmode")
    if (body.classList == "toggle-darkmode") {
        btnDarkMode.innerHTML = "Lightmode";
      } else {
        btnDarkMode.innerHTML = "Darkmode";
      }
})

btnRätta.addEventListener("click", function () {            
  //CORRECT ANSWERS
  var rätta = 0;
  //fråga 1
  for (var i = 0; i < qst1.length; i++) {
    var radio = qst1[i];
    if(radio.value === "hammarby" && radio.checked) {
      rätta++;
    }
  }
  //fråga 2
  for (var i = 0; i < qst2.length; i++) {
    var radio = qst2[i];
    if(radio.value === "malmö" && radio.checked) {
      rätta++;
    }
  }
  //fråga 3
  for (var i = 0; i < qst3.length; i++) {
    var radio = qst3[i];
    if(radio.value === "aik" && radio.checked) {
      rätta++;
    }
  }
  //fråga 4
  for (var i = 0; i < qst4.length; i++) {
    var radio = qst4[i];
    if(radio.value === "hammarby" && radio.checked) {
      rätta++;
    }
  }
  //fråga 5
  for (var i = 0; i < qst5.length; i++) {
    var radio = qst5[i];
    if(radio.value === "östersund" && radio.checked) {
      rätta++;
    }
  }
  //fråga 6
  for (var i = 0; i < qst6.length; i++) {
    var radio = qst6[i];
    if(radio.value === "30" && radio.checked) {
      rätta++;
    }
  }
   //fråga 7
   for (var i = 0; i < qst7.length; i++) {
    var radio = qst7[i];
    if(radio.value === "1" && radio.checked) {
      rätta++;
    }
  }

   //fråga 8 (CHECKBOX)
   for (var i = 0; i < 1; i++) {
    var checkBox = qst8;
    
    if((checkBox[0].checked) && (checkBox[2].checked) && (checkBox[1].checked == false)) {
    console.log("hej");
    rätta++;
    }
  }
   //fråga 9
   for (var i = 0; i < qst9.length; i++) {
    var radio = qst9[i];
    if(radio.value === "aik" && radio.checked) {
      rätta++;
    }
    
  }
  for (var i = 0; i < qst10.length; i++) {
    var radio = qst10[i];
    if(radio.value === "milo" && radio.checked) {
      rätta++;
    }
    
  }
  if (rätta > 5) {
    h2.style.color = "orange";
    if (rätta >= 8) {
      h2.style.color = "green";
    }
  }
 
  h2.innerHTML = "Du fick " + rätta + " av 10 rätt på Allsvenskan quizen";
})

btnRefresh.addEventListener("click", function () {
  window.location.reload();
})