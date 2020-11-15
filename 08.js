/*
Написать конвертор валют. Пользователь вводит количество USD, 
выбирает, в какую валюту хочет перевести: EUR, UAH или AZN, 
и получает в ответ соответствующую сумму.
*/


const a = +prompt('выбирите номер валюты: 1(EUR), 2(UAH), 3(AZN)');
const v = +prompt('Введите сумму')

let eur = 0.840358,
    uah = 28.39,
    azn = 1.70;

switch (a) {
    case 1:
        let b = v * eur
        alert(`${b} EUR`);
        break;
    case 2:
        let c = v * uah
        alert(`${c} UAH`);
        break;
    case 3:
        let d = v * azn
        alert(`${d} AZN`);
        break;
}