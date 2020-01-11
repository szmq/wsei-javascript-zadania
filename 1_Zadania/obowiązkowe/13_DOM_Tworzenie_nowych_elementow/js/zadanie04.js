document.addEventListener('DOMContentLoaded', (event) => {
  const button = document.querySelector("#remove");

  button.addEventListener("click", () => {
    document.querySelector(".list").innerHTML = "";
  });
});
