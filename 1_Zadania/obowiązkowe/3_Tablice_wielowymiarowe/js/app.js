
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

// Zadanie 2

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

task2Array.forEach(array => console.log(array));
task2Array.forEach(array => console.log(array.length));
task2Array.forEach(array => array.forEach(el => console.log(el)));

// Zadanie 3

// const print2DArray = (array) => {
//     array.forEach(arrayInner => arrayInner.forEach(el => console.log(el)));
// };