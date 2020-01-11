document.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll(".button");

  [...buttons].forEach(button => {
    button.addEventListener("click", function() {
      if (!this.nextElementSibling) {
        return;
      }
      this.nextElementSibling.hidden = !this.nextElementSibling.hidden;
    });
  });
});
