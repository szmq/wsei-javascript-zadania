document.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll(".button");

  [...buttons].forEach(button => {
    button.addEventListener("click", function() {
      this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
  });
});
