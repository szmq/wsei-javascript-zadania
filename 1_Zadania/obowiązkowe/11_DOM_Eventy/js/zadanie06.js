document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('box');
  const globalX = document.getElementById('globalX');
  const globalY = document.getElementById('globalY');
  const localX = document.getElementById('localX');
  const localY = document.getElementById('localY');

  box.addEventListener('mousemove', event => {
    globalX.innerText = String(event.clientX);
    globalY.innerText = String(event.clientY);
    localX.innerText = String(event.offsetX);
    localY.innerText = String(event.offsetY);
  })
});
