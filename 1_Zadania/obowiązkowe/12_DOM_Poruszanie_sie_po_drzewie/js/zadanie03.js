document.addEventListener('DOMContentLoaded', (event) => {
  const divs = document.querySelectorAll(".listContainer");

  [...divs].forEach(div => {
    div.addEventListener("mouseover", function() {
      this.querySelector(".list").children[0].style = "color: red";
      this.querySelector(".list").lastElementChild.style = "color: blue";
      this.querySelector(".list").style = "color: green";
    });

    div.addEventListener("mouseleave", function() {
      this.querySelector(".list").children[0].style = "";
      this.querySelector(".list").lastElementChild.style = "";
      this.querySelector(".list").style = "";
    });
  });
});
