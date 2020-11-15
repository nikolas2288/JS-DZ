/*
1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
- Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
- Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
- Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
количества и цены за единицу товара. Написать следующие функции.
- Распечатка чека на экран.
- Подсчет общей суммы покупки.
- Получение самой дорогой покупки в чеке.
- Подсчет средней стоимости одного товара в чеке.

3. Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

*/

var shoppingList = [
    {
        name: 'orange',
        qty: 5,
        bought: 'not bought'
    },
    {
        name: 'apple',
        qty: 10,
        bought: 'not bought'
    },
    {
        name: 'banana',
        qty: 2,
        bought: 'not bought'
    }
];


// for (let index = 0; index < shoppingList.length; index++) {
//     console.log(shoppingList[index].name);
// }

var addShoppingList = [
    {
        name: 'new product',
        qty: 200,
        bought: 'bought'
    },
    {
        name: 'apple',
        qty: 10,
        bought: 'not bought'
    },
];
// - Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные
function printArray(array) {
    var info = [];
    for (var index = 0; index < array.length; index++) {
        if (array[index].bought == 'not bought') {
            info.unshift(array[index].name);
        }
        if (array[index].bought == 'bought') {
            info.push(array[index].name);
        }
    }
    console.log(info);
}
// printArray(shoppingList)


// - Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.

// function addshoppingList(array, plusArray) {
//     let plusShoppingList = [];
//     for (let index = 0; index < array.length; index++) {
//         plusShoppingList.push(array[index]);
//     }
//     for (let index = 0; index < plusArray.length; index++) {
//         plusShoppingList.push(plusArray[index]);
//     }
//     printArray(plusShoppingList);
//     console.log(plusShoppingList);
// }
// addshoppingList(shoppingList, addShoppingList);


// - Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function bought(array) {
    let name = prompt('Apple \n banana \n orange')
    for (let index = 0; index < array.length; index++) {
        if (array[index].name == name) {
            array[index].bought = 'bought'
        }
    }
    console.log(array);
}
// bought(shoppingList)




/*
2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
количества и цены за единицу товара. Написать следующие функции.
- Распечатка чека на экран.
- Подсчет общей суммы покупки.
- Получение самой дорогой покупки в чеке.
- Подсчет средней стоимости одного товара в чеке.
*/

let check = [
    {
        name: 'Chips',
        qty: 2,
        price: 50
    },
    {
        name: 'PepsiCola',
        qty: 1,
        price: 49
    },
    {
        name: 'Apple',
        qty: 2,
        price: 100
    },
]

// - Распечатка чека на экран.

function printCheck(array) {
    let resultPrintCheck = ''
    for (let index = 0; index < array.length; index++) {
        resultPrintCheck += `Название: ${array[index].name}\nКол-во: ${array[index].qty}\nЦена: ${array[index].price}грн\n`
    }
    alert(resultPrintCheck)
}
// printCheck(check)

// - Подсчет общей суммы покупки.
function countSum(array) {
    let countResult = 0
    for (let index = 0; index < array.length; index++) {
        countResult += array[index].price * array[index].qty
    }
    console.log(countResult);
}
countSum(check)

// - Получение самой дорогой покупки в чеке. 
function addshoppingList(array) {
    let plusShoppingList = [];
    for (let index = 0; index < array.length; index++) {
        plusShoppingList.push(array[index].price);
    }
    let a = Math.max.apply(Math, plusShoppingList)
    console.log(a);

}
// addshoppingList(check)

//- Подсчет средней стоимости одного товара в чеке.
function averagePrice(array) {
    for (let index = 0; index < array.length; index++) {
        var midleAverage = array[index].price / 2
        console.log(`Средняя цена: ${midleAverage}`);
    }
}
averagePrice(check)


/*
3. Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>,
добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
*/

let css = [
    {
        Name: 'color',
        Value: 'red'
    },
    {
        Name: 'font-size',
        Value: '50px'
    },
    {
        Name: 'text-align',
        Value: 'center'
    }
]

function print(array, text) {
    let paragraf = `<p style="${array[0].Name}: ${array[0].Value};  ${array[1].Name}: ${array[1].Value};  ${array[2].Name}: ${array[2].Value};">`
    paragraf += text
    paragraf += '</p>'
    document.write(paragraf)
}
print(css, prompt(''))
