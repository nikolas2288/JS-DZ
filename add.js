//  Number

// function randoMaizer(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(randoMaizer(10, 42));

// function randoMaizer(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(randoMaizer(10, 42));

// const NAME = 'Ты andrey '

// function lasVegas(max, min) {
//     return Math.floor(Math.random() * (max - min) + min)
// }

// console.log(NAME.repeat(lasVegas(100, 56)));

// СТРИНГ гыыыыыыыы

// // nik
// const personName = 'Николас'
// const personAge = 20
// // Julia
// const personNameTwo = 'Юля'
// const personAgeTwo = -1


// function regPerson(s, name, age) {
//     if (age <= 0) {
//         age = 'Пока не родился'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const output = regPerson`Name: ${personName}, age: ${personAge}!`
// const outputTwo = regPerson`Name: ${personNameTwo}, age: ${personAgeTwo}!`

// console.log(output);
// console.log(outputTwo);



// ---------function-----------



// // Function Declaration
// function greet(name) {
//     console.log('Hello - ', name);
// }



// // Function Expression 
// const greetTwo = function greetTwo(name) {
//     console.log('Hello 2 - ', name);
// }
// greet('lera')
// greetTwo('Julia')



// Anonim F-on
// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)  // clear timeout 
//     } else {
//         console.log((++counter));
//     }
// }, 1000)



//  Стрелочные ф-ции
// const arrow2 = num => num ** 2
// console.log(arrow2(10));



// Ф-ции по умолчанию
// const sum = (a, b) => a + b
// console.log(sum(41, 41)); 

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res);


// Ф-ция замыкания
// function created(name) {
//     return function (lastName) {
//         console.log(name + lastName);
//     }
// }

// const res = created('nik')
// console.log(res('irakli'))
// console.log(res('Gosha'))

// // masivi Задача н1
// const name = 'Введи, цифру'
// const resiver = name.split('').reverse().join('')
// console.log(resiver);


// const peaple = [
//     { name: 'Aleksei', budget: 500 },
//     { name: 'Alekseya jena', budget: 100 },
//     { name: 'Nik', budget: 0 }
// ]

// const index = peaple.findIndex(function (person) {
//     return person.budget === 0
// })
// const index2 = peaple.find(function (person) {
//     return person.budget === 0
// })
// console.log(index);
// console.log(index2); 
// let person2
// for (const person of peaple) {
//     console.log(person);
//     if (person.budget === 100) {
//         person2 = person
//     }
// }

// // console.log(person2);
// const index = peaple.find(person => person.budget === 0)
// console.log(index); // --------! COOL

// const index2 = person => person.budget === 0
// const index = peaple.find(index2)
// console.log(index);


// !!
// const fib = [1, 2, 3, 4, 5, 6, 19, 30, 23, 100]

// const pow2 = num => num ** 2
// const pow = fib.map(pow2)

// const lilpup = pow.filter(num => num > 20)
// console.log(lilpup);






// const peaple = [
//     { name: 'Aleksei', budget: 500 },
//     { name: 'Alekseya jena', budget: 100 },
//     { name: 'Vera', budget: 244 },
//     { name: 'Nikonas', budget: 402 },
//     { name: 'Lole', budget: 5 },
//     { name: 'xuy', budget: 10000 }
// ]

// const allBudget = peaple
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//         acc += person.budget
//         return acc
//     }, 0)

// console.log(allBudget);


// const person = {
//     name: 'nikolas',
//     age: 20,
//     language: ['RU', 'UK', 'GE', 'EN'],
//     smoke: false
// }


// const { name, age, language } = person
// console.log(name, age, language);

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('Key', key);
//         console.log('Value', person[key]);
//     }
// }






//  Асинхрон

// const timeout = setTimeout(() => {
//     console.log('Через 2.5 остановится ');
// }, 2500)
// clearTimeout(timeout)  // Чистит таймаут

// const interval = setInterval(() => {
//     console.log('Через 2.5 остановится ');
// }, 1000)
// clearTimeout(interval) // Чистит интервал

// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve()
//             reject('Чё - то пошло не так...')
//         }, wait)
//     })
//     return promise
// }

// delay(2500)
//     .then(() => {
//         console.log('after 2.5 second')
//     })
//     .catch(err => console.error('error', err))
//     .finally(() => console.log('finally'))

// const getData = () => new Promise(resolve => resolve([
//     1, 1, 2, 3, 5, 8, 13
// ]))

// getData().then(data => console.log(data))

// async function asyncExample() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log('Data', data)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('finaly')
//     }
// }

// asyncExample()