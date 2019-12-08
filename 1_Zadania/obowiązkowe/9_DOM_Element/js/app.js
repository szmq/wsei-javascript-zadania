document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    function getDatasInfo(elements) {
        const nElements = [];

        [...elements].forEach(element => {
            nElements.push(element.getAttribute('data-color'));
        });

        return nElements;
    }

    getDatasInfo(links);
});
