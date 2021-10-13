//1
var favFruit = ["banan", "äpple", "päron", "melon", "apelsin"]

let newFruit = favFruit.push("nektarin");

console.log(favFruit[0]);
console.log(favFruit[3]);
console.log(favFruit[5]);

//2
var favFilms = ["badboys", "badboys2", "harry potter", "starwars", "robinhood", "narnia", "simpsons", "familyguy", "southpark", "youtube"];

let removeFilm = favFilms.pop()
console.log(favFilms[favFilms.length-1]);
console.log(favFilms[favFilms.length-2]);
console.log(favFilms);
//3

var pet = {
    animal: "dog",
    type: "bulldog",
    age: 60,
    plantbased: false,
    
    friend: {
        animal: "dog",
        type: "rat",
        age: 40,
        plantbased: false
    }
}
console.log(pet.age);
console.log(pet.friend.type);

//4
var namn = "henry"
var ålder = 19
var sport = "fotboll"

console.log(namn + " " + ålder + " " + sport);