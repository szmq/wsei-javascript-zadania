//Zadanie 0a

const city = {
    capital: "San Escobar",
    population: 2000000,
    president: "San President",
    primeMinisters: ["San Minister 1", "San Minister 2", "San Minister 3"],
};

console.log("capital: " + city.capital);
console.log("population: " + city.population);
console.log("president: " + city.president);
console.log("primeMinisters: " + city.primeMinisters);

//Zadanie 0b

const timeMachine = {
  shape: "shape1",
  model: "model1",
  run(date, place){
    console.log("Time Machine will take you to " + place + " , date: " + date);
  }
};

console.log("shape: " + timeMachine.shape);
console.log("model: " + timeMachine.model);
console.log(timeMachine.run(new Date(2040,4,2),"San Escobar"));

// Zadanie 1

const book = {
  title: "title1",
  author: "author1",
  numberOfPages: 10
};

console.log("title: " + book.title);
console.log("author: " + book.author);
console.log("numberOfPages: " + book.numberOfPages);

// Zadanie 2
const person = {
  name: "personName",
  age: 12,
  sayHello() {
    console.log("hello");
  }
};

console.log("name: " + person.name);
console.log("age: " + person.age);
console.log(person.sayHello());

// Zadanie 3

const recipe = {
  title: "titleRecipe",
  servings: 40,
};

recipe.ingredients = ["oneone", "moremore"];

console.log("title: " + recipe.title);
console.log("servings: " + recipe.servings);
console.log("ingredients: " + recipe.ingredients);

// Zadanie 6

var spoon = {
  isExist: true
};

var fork = spoon;
fork.isExist = false;

console.log(spoon.isExist); //false
