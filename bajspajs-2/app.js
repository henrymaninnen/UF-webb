array = [2,5,10,15,20,25,30,50,60,92];

const container = document.querySelector("#div1");

var list = document.createElement("ul");

container.appendChild(list);

array.forEach(item => {
    var listItem = document.createElement("li");
  //  list.appendChild(listItem);
    //listItem.innerHTML = item;
});

let p = document.createElement("p");
 p.innerHTML = "Hej från javascirpt"

 container.appendChild(p);

 const para = document.querySelectorAll("p");
 const btn = document.querySelector("button");

 btn.addEventListener("click", function () {
    para.forEach((p) =>{
        
    })
 })
 

// const para = document.createElement("p");

// const node2 = document.createTextNode("Hej igen från javascript");
// para.appendChild(node);
// para2.appendChild(node2);

// const element = document.getElementById("div1");
// element.appendChild(para);
// element.appendChild(para2);

// var header = document.querySelector("h1");
// header.innerHTML = "Det här är en h1"