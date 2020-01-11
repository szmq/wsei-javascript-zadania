document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.box');

  [...elements].forEach(box => {
    box.addEventListener('click', function() {
      this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    })
  })
});
