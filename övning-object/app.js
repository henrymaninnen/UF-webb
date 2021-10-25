const städer = document.querySelector("#allCities");
const städerMat = document.querySelector("#citiesForFoodies");
const städerBefolkning = document.querySelector("#sortedByPopulation");
const cities = [
    {
      city: "London",
      code: "UK",
      population: 11504632,
      foodRanking: 4
    },
    {
      city: "Manchester",
      code: "UK",
      population: 4280424,
      foodRanking: 5
    },
    {
      city: "Paris",
      code: "FR",
      population: 10830024,
      foodRanking: 9
    },
    {
      city: "Nice",
      code: "FR",
      population: 4250024,
      foodRanking: 10
    },
    {
      city: "Berlin",
      code: "DE",
      population: 8250024,
      foodRanking: 8
    },
    {
      city: "Munich",
      code: "DE",
      population: 5250050,
      foodRanking: 6
    }
  ];
  cities.forEach(city => {
      var li = document.createElement("li");
      städer.appendChild(li);
      li.innerHTML = city.city;
  });

   cities.forEach(city => {
        if (city.foodRanking < 10) {
            var li = document.createElement("li");
      städerMat.appendChild(li);
            li.innerHTML = city.city;
           
        }
  });

  cities.forEach(city => {
    var li = document.createElement("li");
    städerBefolkning.appendChild(li);
    cities.sort((a, b) => a - b);
    console.log(cities);
    li.innerHTML = city.city;
});
  