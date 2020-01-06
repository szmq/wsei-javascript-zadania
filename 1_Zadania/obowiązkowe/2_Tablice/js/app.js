// Zadanie 0 

function distFromAverage(array){
    let sum = 0;

    array.forEach(element => {
        sum += element;
    });

    let average = sum / array.length;

    return array.map(element => {
        return element - average;
    })
}

// Zadanie 1 

const x = ['banana', 'orange', 'apple'];
console.log(x[0]);
console.log(x[x.length - 1]);

for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}

// Zadanie 3 

function printTable(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

// Zadanie 4

function multiply(array) {
    let sum = array[0];

    for (let i = 1; i < array.length; i++) {
        sum *= array[i]
    }

    console.log(sum)
}

// Zadanie 5 

function getEvenAvarage1(array) {
    let sum = 0;
    let counter = 0; 

    for (let i = 0; i < array.length; i++) {
       array[i] % 2 === 0 ? (sum += array[i], counter += 1) : null;
    }
    
    return sum > 1 ? sum / counter : null;
}

// Zadanie 6

function sortArray(array) {
    return array.sort((a, b) =>  a - b);
}

// Zadanie 7

function addArrays(array1,array2){
    let longerArray = array1;
    let shorterArray = array2;

    if (longerArray.length < shorterArray.length) {
        longerArray = array2;
        shorterArray = array1;
    }

    return longerArray.map((num, idx) => num + (shorterArray[idx] || 0));
}