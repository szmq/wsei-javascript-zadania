document.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll(".deleteBtn");

  for (const key in [...buttons]) {
    if (buttons.hasOwnProperty(key)) {
      const element = buttons[key];
      element.addEventListener("click", deleteNode);
    }
  }

  function deleteNode(){
    const temp = this.parentElement.parentElement;
    temp.parentElement.removeChild(temp);
  }
});
