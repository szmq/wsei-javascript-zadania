document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.querySelector(".button");
  let elementCounter = 0;

  button.addEventListener("click", () => {
    const list = document.querySelector(".menu");
    const listElement = document.createElement("li");

    list.appendChild(listElement);
    listElement.innerHTML = "Element: " + (elementCounter + 1) + ". W chwili dodania było: " + elementCounter + " elementów";

    elementCounter += 1;
  });
});
