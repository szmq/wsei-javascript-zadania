document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji
  // addEventListener to właśnie document)
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id a
    console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id b
    console.log("b: ", this);


    const innerFuncOne = () => {
      // Tutaj this wskazuje na element Window, bo funkcja została
      //wywołana bez żadnego kontekstu.
      console.log("innerFuncOne: ", this);
    };
    innerFuncOne();

  });
});

// 1. Można użyć arrrow function, któ®e nie zmieniają kontekstu
// 2. bind, apply, call
// 3. przekazać jako argument
// 4. bezposrednio wypisac b zamiast this, bo znajduje sie w scope