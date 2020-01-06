var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }
];

// Zadanie 5

for (let index = 0; index < animals.length; index++) {
    for (const property in animals[index]) {
        if (animals[index].hasOwnProperty(property)) {
            if(Array.isArray(animals[index][property]) === false){
                console.log(`${property}: ${animals[index][property]}`);
            }
            else{
                for (let i = 0; i < animals[index][property].length; i++) {
                    for (const internalProperty in animals[index][property][i]) {
                        if (animals[index][property][i].hasOwnProperty(internalProperty)) {
                            console.log(`${property}: ${internalProperty}: ${animals[index][property][i][internalProperty]}`);
                        }
                    }
                }
            }
        }
    }
}