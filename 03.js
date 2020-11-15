/*
Пользователь вводит сумму вклада в банк на 2 месяца,
с процентной ставкой депозита 5% годовых.
Вывести сумму начисленных процентов.
*/

let userMoney = +prompt('', 1000)

const proc = 5 // 0.5

const year = 365.25 // 

const twoMonth = 60

let a = (userMoney / 100) * proc // 50

let b = (a / twoMonth) * 10

// let c = a / b

// let d = userMoney + c

console.log(`year: ${a}`);
console.log(`two month: ${b}`);
