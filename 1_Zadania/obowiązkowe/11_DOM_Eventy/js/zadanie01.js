document.addEventListener('DOMContentLoaded', () => {
  var menu = document.querySelector("#menu");
  var paragraf = document.querySelector("p");

  menu.classList.add("menu");
  paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

// 1 Przeglądarka wywołała skrypt przed wyrenderowaniem DOM, więc querySelector nie znalazl elementow.
// 2 Poprawilo, event nasluchuje event nadany przez przegladarke odpowiedzialny za zaladowanie DOM, wtedy dopiero wywoluje cialo funkcji
// 3 Bez zmian wzgledem 2, wywoluje sie po zalodowaniu DOM