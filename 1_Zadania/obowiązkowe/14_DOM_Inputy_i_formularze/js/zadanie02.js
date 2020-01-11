document.addEventListener('DOMContentLoaded', (event) => {
  const select = document.querySelector('select')
  const images = Array.from(document.querySelectorAll('img'))

  const showValidImage = () => {
    images.forEach(image => {
      if (image.alt === select.value) {
        image.style = 'display: block'
      } else {
        image.style = 'display: none'
      }
    })
  }

  select.addEventListener('change', event => {
    console.log(event)
    showValidImage()
  })

  showValidImage()
});
