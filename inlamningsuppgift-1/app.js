const input = document.querySelector("#input");
const div = document.querySelector("#text");
const addBtn = document.querySelector("#button");
const ul = document.querySelector("ul");
const fastBtn = document.querySelector("#fast-track");
const delBtn = document.querySelector("#del-btn");

array = [];

addBtn.addEventListener("click", function () {  
    var inputValue = input.value
    array.push(inputValue);
    ul.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(array[i]));
        ul.appendChild(li);
    }
 })

fastBtn.addEventListener("click", function () {
    var inputValue = input.value
    array.unshift(inputValue);
    ul.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(array[i]));
        ul.appendChild(li);
    }
})

delBtn.addEventListener("click", function () {    
    array.shift();
    console.log(array);
    ul.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(array[i]));
        ul.appendChild(li);
    }
    if (array.length == 0) {
        ul.innerText = "ingen i kö";
    }
})
    var li = document.createElement('ul');
    ul.appendChild(li);
if (array.length == 0) {
    li.innerHTML = "ingen i kö"
}



