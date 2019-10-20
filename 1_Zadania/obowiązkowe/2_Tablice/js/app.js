// Zadanie 0 

function distFromAverage(array){
    let sum = 0;

    array.forEach(element => {
        sum += element;
    })

    let average = sum / array.length;

    return array.map(element => {
        return element - average;
    })
}

// Zadanie 1 

const x = ['banana', 'orange', 'apple']
console.log(x[0]);
console.log(x[x.length - 1])

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