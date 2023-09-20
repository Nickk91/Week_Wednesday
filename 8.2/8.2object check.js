// let myCountry = {
// myCountry.name = "England";
// myCountry.capital = "London";
// myCountry.language = "English";
// myCountry.population = 56489800;
// myCountry.neighbours = ["Scotland", "Northen_Ireland", "Wales"];
// describe: function () {
//     return `${this.name} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
// }

// console.log(myCountry);

// decribe: function() {
//     `${this.name} has ${this.population} people, their mother tongue is ${this.language}, they
//     have ${this.neighbours.count} neighbouring countries and a capital called ${this.capital}`};

let myCountry = {
  name: "England",
  capital: "London",
  language: "English",
  population: 56489800,
  neighbours: ["Scotland", "Northern_Ireland", "Wales"],
  describe: function () {
    return `${this.name} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsland: function () {
    return myCountry.neighbours.length === 0 ? true : false;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
