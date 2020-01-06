/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Zadanie 1

// Definicja funkcji sortArray
function sortArray() {

    // Definicja zmiennej typu array w scope sortArray
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Wywołanie metody sortujacej elementy tablicy 'sort' z funkcja porownujaca elementy, jako argument
    points.sort(function (a, b) {
        // elementy tablicy zostana posortowane odpowiednio do wartosci
        // zwracanej przez funkcje. Tu liczby sa odejmowane i na podstawie wartosci, zwracane odpowienio w tablicy
        // od najmniejszej do najwiekszej
        return a - b;
    });

    // Zwrocenie posortowanej tablicy przez funkcje sortArray
    return points;
}

// Wywolanie funkcji sortArray
sortArray();
