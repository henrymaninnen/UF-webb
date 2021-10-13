//uppgift 1

const elevName = "erik";
const elevPoints = 9;
const maxPoints = 50;

if (elevPoints > maxPoints / 2) {
   //console.log(elevName + " " + "är godkänd");
} else {
   //console.log(elevName + " " + "är underkänd");
}

//uppgift 1a
if (elevPoints > maxPoints / 2 && elevPoints < maxPoints * 0.75) {
   // console.log(elevName + " " + "får betyget E");
} else if (elevPoints > maxPoints * 0.75 && elevPoints < maxPoints * 0.95) {
   // console.log(elevName + " " + "får betyget c");
} else if (elevPoints > maxPoints * 0.95) {
   // console.log(elevName + " " + "får betyget A");
} else {
   // console.log(elevName + " " + "får betyget F");
}


//uppgift 2

//var debet = 110;
//var kredit = 200;

if (debet == kredit) {
   //  console.log("de är lika stora");
}
if (debet > kredit) {
   // console.log("Debet är större");
}
if (kredit > debet) {
   // console.log("kredit är större");
}


//Uppgift 4(SVÅR)
function slumpa() {
   var kör = Math.random();
   if (kör > 0.5) {
      //console.log("KLAVE");
   } else {
      //console.log("krona");
   }

}
slumpa();

//uppgift 5 (svår)
var kredit = [1, 2, 3, 4];
var debet = [1, 2, 3, 4];
let sumKredit = 0;
let sumDebet = 0;

function myFunction() {
   for (let i = 0; i < kredit.length; i++) {
      sumKredit += kredit[i];

   }
   for (let i = 0; i < debet.length; i++) {
      sumDebet += debet[i];

   }
   if (sumDebet == sumKredit) {
      // console.log("Balansrapport godkänd");
   } else {
      // console.log("Balansrapport är ej godkänd");
   }
}
myFunction()

var btn = document.querySelector("button");
var element = document.body;

btn.addEventListener("click", function () {
   element.classList.toggle("dark");
})
