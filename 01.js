/*
Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
*/
let distance = +prompt('distance')
let speed = +prompt('speed')

let result = distance / speed

console.log(result);