/*
Зациклить калькулятор. 
Запросить у пользователя 2 числа и знак,
 решить пример, вывести результат и спросить,
хочет ли он решить еще один пример.
И так до тех пор, пока пользователь не откажется.
*/

while (confirm('Хотите использовать калькулятор?')) {
    alert(f(+prompt('numOne'), prompt('numMath'), +prompt('numTwo')))
}

function f(numOne, numTwo, numMath) {
    return eval(`${numOne}${numTwo}${numMath}`)
}

