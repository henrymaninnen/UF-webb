const input = document.querySelector("#input");
const btn = document.querySelector("#add");
const div = document.querySelector("#svar");
const ul = document.querySelector("ul");


btn.addEventListener("click", function() {
    //ta info från input
    var inputText = input.value;
    console.log(inputText);
    //skapa li
    var liDiv = document.createElement("div");
    liDiv.setAttribute("id", "liDiv");
    var li = document.createElement("li");
    var remove = document.createElement("button");
    remove.setAttribute("id", "removeBtn");
    
    liDiv.appendChild(remove);
    liDiv.appendChild(li);
    div.appendChild(liDiv);
    li.innerHTML = inputText;
    remove.innerHTML = "X";

    if (liDiv.childElemen) {
        liDiv.innerHTML = "fel"
        console.log("blbablabl");
    }
    remove.addEventListener("click", function () {
            li.parentElement.remove();
    })
})