/*
Запросить у пользователя трехзначное и число и проверить, 
есть ли в нем одинаковые цифры.
*/

let a = +prompt('', 122);

let b = a % 100 // 22

let c = b % 10 // 2

let d = (b - c) / 10 // 2

let e = (a - b) / 100 // 1

if (c == d || c == e || d == e) {
    console.log('eсть');
} else {
    console.log('Нема');
}
