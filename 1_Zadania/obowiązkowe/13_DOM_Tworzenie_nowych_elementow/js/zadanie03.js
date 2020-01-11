document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.querySelector("#remove");

  button.addEventListener("click", () => {
    button.parentNode.removeChild(button)
  });
});
