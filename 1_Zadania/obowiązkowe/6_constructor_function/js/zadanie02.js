function Calculator() {
	this.history = [];
}

Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;

    this.history.push(`added ${num1} to ${num2} got ${result}`);
    return result;
};

Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2;

    this.history.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;
};

Calculator.prototype.subtract = function (num1, num2) {
    const result = num1 - num2;

    this.history.push(`subtracted ${num1} from ${num2} got ${result}`);
    return result;
}

Calculator.prototype.divide = function (num1, num2) {
    const result = num1 / num2;

    this.history.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
}

Calculator.prototype.printOperations = function () {
    this.history.forEach((el) => {
        console.log(el);
    })
}

Calculator.prototype.printOperations = function () {
    this.history = [];
}

// test
var calculator = new Calculator();