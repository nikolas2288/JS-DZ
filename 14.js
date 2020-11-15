/*
Зациклить вывод дней недели таким образом:
«День недели. Хотите увидеть следующий день?»
и так до тех пор, пока пользователь нажимает OK.
*/

var numUser = +prompt('Введите день недели')

do {
    if (numUser == 7) {
        numUser = 0
    }
    switch (numUser) {
        case 1:
            console.log('Клятый день');
            break
        case 2:
            console.log('Не менее клятый');
            break
        case 3:
            console.log('Среднячок');
            break
        case 4:
            console.log('В предвкушении кайфа');
            break
        case 5:
            console.log('По кайфу');
            break
        case 6:
            console.log('Суббота');
            break
        case 7:
        case 0:
            console.log('Воскресенье');
            break
        default:
            console.log('Нет такого дня');
            break
    }
    numUser++

} while (confirm('Вывести след день?'))