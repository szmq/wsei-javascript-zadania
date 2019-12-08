document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */ 

    // zadanie 0
    const title = document.querySelector('.title');
    function getDataAnimation(element) {
        return element.getAttribute('data-animation');
    }
    getDataAnimation(title);

    // zadanie 1
    const home1 = document.querySelector('#home');
    const home2 = document.getElementById('home');

    const firstDataDirection = document.querySelector('[data-direction]');
    const firstBlockElement = document.querySelector('.block');
    
    // zadanie 2
    const liElements = document.querySelectorAll('nav li');
    const pElements = document.querySelectorAll('div p');
    const divElements = document.querySelectorAll('article div');

    // zadanie 3
    const articleFirst = document.querySelector('.first');

    if (articleFirst) {
        const h1 = articleFirst.querySelectorAll('h1');
        console.log('zadanie 3', h1.length)
    }
});
