document.addEventListener('DOMContentLoaded', (event) => {
  var buttons = document.querySelectorAll(".moveBtn");

  for (const key in buttons) {
    if (buttons.hasOwnProperty(key)) {
      const element = buttons[key];

      element.addEventListener("click", function() {
        let list1 = document.getElementById("list1");
        let list2 = document.getElementById("list2");

        if (this.parentElement.parentElement.id === "list1") {
          list2.appendChild(this.parentElement);
        } else {
          list1.appendChild(this.parentElement);
        }
      });
    }
  }
});
