document.addEventListener("DOMContentLoaded", function () {
  /*
  Poniżej napisz kod rozwiązujący zadania
   */

  // Zadanie 0

  const li = document.querySelectorAll(".ex5 li");

  for (let i = 0; i < li.length; i++) {
    const x = i + 1;

    if (x % 2 === 0) {
      li[i].style["background-color"] = "green";
    }

    if (x % 3 === 0) {
      li[i].style["border-bottom"] = "2px solid red";
    }

    if (x === 5) {
      li[i].classList.add("big");
    }
  }

  // Zadanie 1

  const chrome = document.querySelector(".chrome");
  chrome.nextSibling.nextSibling.innerText = "Chrome";
  chrome.style.width = "100px";

  const edge = document.querySelector(".edge");
  edge.nextSibling.nextSibling.href = "https://www.microsoft.com/pl-pl/windows/microsoft-edge";
  edge.style.backgroundImage = "url('./assets/img/edge.png')";

  const firefox = document.querySelector(".firefox");
  firefox.style.width = "97px";
  firefox.nextSibling.nextSibling.href = "https://www.mozilla.org/pl/firefox/new/";
  firefox.nextSibling.nextSibling.innerText = "Firefox";
  firefox.style.backgroundImage = "url('./assets/img/firefox.png')";

  // Style dodawane przez Javascript atrybutem "style" są dodawane inline.
  // Innym sposobem byłoby ustawianie odpowiedniej klasy albo CSS Variables

  // Zadanie 2
  const name = document.querySelector("#name");
  const color = document.querySelector("#fav_color");
  const meal = document.querySelector("#fav_meal");

  name.innerHTML = "Szymon Ryczek";
  color.innerHTML = "Zielony";
  meal.innerHTML = "Frytki";


  // Zadanie 3
  const menu = document.querySelector(".ex3 ul");
  const menuLi = menu.querySelectorAll("li");
  menu.classList.add("menu");

  for (let i = 0; i < menuLi.length; i++) {
    menuLi[i].classList.add("menuElement");

    if (menuLi[i].classList.contains("error")){
      menuLi[i].classList.remove("error");
    }
  }

  // Zadanie 4
  const li4 = document.querySelectorAll(".ex4 ul li");

  for (let i = 0; i < li4.length; i++) {
    li4[i].id = i + 1;
  }
});