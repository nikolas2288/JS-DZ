// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

let userNum = +prompt('', 123);

let numOne = userNum % 100; // 23

let numTwo = numOne % 10 // 3

let numThree = numOne - numTwo // 20

let result = numThree / 10 // 2

let result2 = (userNum - numOne) / 100; // 1

alert(`${numTwo}${result}${result2}`);