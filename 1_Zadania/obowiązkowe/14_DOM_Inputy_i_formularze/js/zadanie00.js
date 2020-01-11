document.addEventListener('DOMContentLoaded', (event) => {
  var DOM_checkButton = document.querySelector(".btn-primary");
  DOM_checkButton.addEventListener("submit", formValidate);

  function formValidate() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;
    if (email.indexOf('@') != -1) {
      if (name.length > 6) {
        if (surname.length > 6) {
          if (pass1 != "" || pass2 != "" && pass1 == pass2) {
            if (document.getElementById("agree").checked == true) {
              return true;
            } else {
              document.querySelector(".error-message").innerHTML = "Musisz zaakceptować warunki";
              event.preventDefault();
            }
          } else {
            document.querySelector(".error-message").innerHTML = "Hasła nie są takie same lub puste";
            event.preventDefault();
          }
        } else {
          document.querySelector(".error-message").innerHTML = "Twoje nazwisko jest za krótkie";
          event.preventDefault();
        }
      } else {
        document.querySelector(".error-message").innerHTML = "Twoje imię jest za krótkie";
        event.preventDefault();
      }
    } else {
      document.querySelector(".error-message").innerHTML = "Email musi posiadać znak @";
      event.preventDefault();
    }
  }
});
