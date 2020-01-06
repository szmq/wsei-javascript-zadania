// Zadanie 3

Hello();

function Hello(){
  console.log("Cześć");
}

Hello();

// W przypadku wywołania funkcji, miejsce jej definicj w ten sposob nie ma znaczenia, tzn. wywołanie może być przed definicją.

hello();

var hello = function Hello(){
  console.log("Witaj");
};

hello();

// TypeError: hello is not a function
// W przypadku przypisania do zmiennej, to sama deklaraca "przejdzie" w gore
// Funkcje są przetwarzane w pierwszym przebiegu parsera, a wyrażenia funkcyjne w drugim przebiegu
