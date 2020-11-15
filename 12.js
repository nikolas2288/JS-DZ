/*
Запросить у пользователя 10 чисел и подсчитать,
сколько он ввел положительных, отрицательных и нулей.
6 При этом также посчитать, сколько четных и нечетных.
Вывести статистику на экран. Учтите,
что достаточно одной переменной (не 10) для ввода чисел пользователем.
*/


let count = 0
let resultNull = 0
let resultPositive = 0
let resultNegative = 0
let resultEven = 0
let resultNotEven = 0
let num = +prompt('Введите число')
do {
    count++;
    if (num === 0) {
        resultNull++
    }
    if (num > 0) {
        resultPositive++
    }
    if (num % 2 == 0) {
        resultEven++
    } else {
        resultNotEven++
    }
} while (count < 10);
alert(`нулей ${resultNull}\nпозитивных ${resultPositive}\nменьше нуля ${resultNegative}\nЧетных ${resultEven}\nне четных ${resultNotEven}`)