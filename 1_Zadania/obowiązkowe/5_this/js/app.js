// Zadanie 0

const car = {
  brand : "brandCar",
  color : "colorCar",
  numberOfKilometers : 1004000,
  printCarinfo(){
    return(this.color + " " + this.brand + ", " + this.numberOfKilometers + "km")
  },
  drive(km){
    this.numberOfKilometers += km;
  }
};

console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());

// Zadanie 1

car.reviews = ["2020-01-01", "2019-01-01", "2018-01-01"];

car.addReview = function (date){
  this.reviews.push(date);
};

car.showReviews = function() {
  this.reviews.forEach((el) => {
    console.log(el);
  });
};

// Zadanie 3

const stairs = {
  step: 0,
  up() {
    this.step += 1;
  },
  down() {
    this.step -= 1;
  },
  printStep() {
    console.log(this.step);
  }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep(); // 2