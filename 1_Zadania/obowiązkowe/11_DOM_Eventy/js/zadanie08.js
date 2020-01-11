document.addEventListener('DOMContentLoaded', event => {
  const windowHeight = document.querySelector('#windowHeight');
  const windowWidth = document.querySelector('#windowWidth');

  windowHeight.innerText = window.innerHeight;
  windowWidth.innerText = window.innerWidth;

  window.addEventListener('resize', () => {
    windowHeight.innerText = window.innerHeight;
    windowWidth.innerText = window.innerWidth;
  })
});
