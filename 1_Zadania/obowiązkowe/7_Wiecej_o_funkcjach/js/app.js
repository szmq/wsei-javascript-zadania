/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Zadanie 0

// Definicja funkcji jeden
function jeden() {

    // Definicja zmiennej "zmienna1" dostępnej w scope funkcji jeden
    var zmienna1 = 1;

    // Definicja funkcji "dwa" dostepnej w scope funkcji jeden
    function dwa() {

        // Wypisanie wartości zmiennej "zmienna1", zmienna zwroci wartosc, poniewaz znajduje się w scopie funkcji dwa
        console.log(zmienna1);

        // Definicja zmiennej "zmienna2" w scope funkcji dwa, nie jeden, wiec w jeden niedostepnej
        var zmienna2 = 3;
    }

    // Wywolanie wyzej zdefiniowanej funkcji dwa
    dwa();

    // Proba wypisania zmiennej, zwroci Uncaught Reference Error, poniewaz zmienna ta nie jest dostepna w scope funkcji jeden
    console.log(zmienna2)
}

// Wywolanie funkcji jeden
jeden();