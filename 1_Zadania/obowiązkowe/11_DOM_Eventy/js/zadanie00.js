const childrens = document.querySelectorAll('.children');

[...childrens].forEach(element => {
  element.parentNode.addEventListener('mouseover', () => {
    element.style = 'display: block'
  });

  element.parentNode.addEventListener('mouseleave', () => {
    element.style = ''
  })
})