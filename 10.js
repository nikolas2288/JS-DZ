/*
Запросить 2 числа и найти только наибольший общий делитель.
*/

let a = +prompt('', 10);
let b = +prompt('', 5);

let c = (a > b) ? a : b // наименьшее число

while (c > 0) {
    if ((b % c) == 0 && (a % c) == 0) {
        console.log(c);
        break
    }
    c--
}

