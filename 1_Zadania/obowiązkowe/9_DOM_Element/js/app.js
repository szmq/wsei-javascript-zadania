document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0

    function getDatasInfo(elements) {
        const nElements = [];

        [...elements].forEach(element => {
            nElements.push(element.getAttribute('data-color'));
        });

        return nElements;
    }

    getDatasInfo(links); // ["blue", "red", "green", "pink"]

    // Zadanie 1

    function writeElements(element) {
        if (element.length === undefined) {
            console.log(element);
            console.log("Class name: " + element.className);
            console.log("Tag name: " + element.tagName);
        } else {
            [...element].forEach((el) => {
                console.log(el);
                console.log("Class name: " + el.className);
                console.log("Tag name: " + el.tagName);
            });
        }
    }

    writeElements(homeElement);
    writeElements(childElements);
    writeElements(banner);
    writeElements(blocks);
    writeElements(links);

    // Zadanie 2

    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i].innerHTML); // Zwraca html potomków elementu
        console.log(blocks[i].outerHTML); // Zwraca html elementu i jego potomków
        blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
        console.log(blocks[i].innerHTML); // Hiperłącza zostały zastąpione plain textem
    }

    // Zadanie 3
    const mainFooter = document.querySelector("#mainFooter");
    function getId(element) {
        return element.id;
    }

    getId(mainFooter);

    // Zadanie 4
    function getTags(elements) {
        const foo = [];

        [...elements].forEach((item) => {
            foo.push(item.tagName);
        });

        return foo;
    }
    getTags(childElements);

    // Zadanie 5
    function getClassInfo(elements){
        const foo = [];

        if (elements.length === undefined) {
            foo.push(elements.className);
            return foo;
        }

        [...elements].forEach((item) => {
            foo.push(item.className);
        });

        return foo;
    }

    getClassInfo(banner);

    // Zadanie 6
    const li = document.querySelectorAll("nav li");

    function setDataDirection(elements) {
        for(let i = 0; i < elements.length; i++){
            if(elements[i].dataset.direction === undefined){
                elements[i].dataset.direction = "top";
            }
        }
    }

    setDataDirection(li);
});
