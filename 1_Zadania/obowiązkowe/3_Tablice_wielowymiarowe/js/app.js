var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

// Zadanie 0

function checkArray(arr){
    return arr.map((elementArray) => {
        return elementArray.every(element => element % 2 === 0)
    })
}

// Zadanie 1

function Zadanie1(){
    console.log(task1Array[3][2]);
    console.log(task1Array[1].length);
    console.log(task1Array[4][2]);
}

// Zadanie 2

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

task2Array.forEach(array => console.log(array));
task2Array.forEach(array => console.log(array.length));
task2Array.forEach(array => array.forEach(el => console.log(el)));

// Zadanie 3 i Zadanie 4

var foo = [[4,5],[3,9],[4,1],[4,7]];
const print2DArray = (array) => array.forEach(arrayInner => arrayInner.forEach(el => console.log(el)));

//print2DArray(foo);

// Zadanie 5
function create2DArray(rows, columns){
    let counter = 0;
    return Array.from(Array(rows), () => Array.from(Array(columns), () => {counter += 1; return counter}));
}