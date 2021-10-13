const input = document.querySelector("#input");
const div = document.querySelector("#text");
const btn = document.querySelector("#button");
const ul = document.querySelector("ul");
const btn2 = document.querySelector("#fast-track")

array = [];

btn.addEventListener("click", function () {
    var inputValue = input.value;
    var li = document.createElement("li");
    ul.appendChild(li);
    array.push(inputValue);
    li.innerHTML = inputValue;
    //rensa input fält
    input.value = "";   
    console.log(array);
})

btn2.addEventListener("click", function () {
    var inputValue = input.value;
    var li = document.createElement("li");
    ul.appendChild(li);
    array.unshift(inputValue);
    li.innerHTML = inputValue;
    li.remove();
    li.innerHTML = inputValue;
    //rensa input fält
    input.value = "";   
    console.log(array);
})


