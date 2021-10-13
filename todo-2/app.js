var input = document.querySelector("#input");
var btn = document.querySelector("button");
var div = document.querySelector("div");

btn.addEventListener("click", function () {
    let inputValue = input.value;
    var text = document.createElement("span");
    var output = text.innerHTML = inputValue;
    div.appendChild(text);
    if (inputValue >= 0 && inputValue <= 4) {
        output.style.color = "red";
        console.log("red");
    }if (inputValue >= 5 && inputValue <= 7) {
        text.innerHTML = inputValue;
    }if (inputValue >= 8 && inputValue <= 10) {
        text.innerHTML = inputValue;
    }
    if (inputValue > 10) {
        
    }
})

