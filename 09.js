let z = +prompt('cколько таблеток ниггер передал белоажопаму?')

let a = 1,
    b = 2,
    c = 3;

const score = 2

if (z == b) {
    console.log(`У вас +${score} Балла`);
    let z2 = +prompt('Сколько колец имел голум?')
    if (z2 == a) {
        console.log(`У вас +${score} Балла`);
        let z3 = +prompt('Сколько осталось Праймов?')
        if (z3 == a) {
            console.log(`Вы набрали ${score * 3} Балла`);
        } else {
            console.log(`Вы набрали ${score * 2} Балла`);
        }
    } else {
        console.log(`У вас -${score} Балла`);
        let z3 = +prompt('Сколько осталось Праймов?')
        if (z3 == a) {
            console.log(`Вы набрали ${score * 2} Балла`);
        } else {
            console.log(`Вы набрали ${score} Балла`);
        }
    }

} else {
    console.log(`У вас -${score} Балла`);
    let z2 = +prompt('Сколько колец имел голум?')
    if (z2 == a) {
        console.log(`У вас +${score} Балла`);
        let z3 = +prompt('Сколько осталось Праймов?')
        if (z3 == a) {
            console.log(`Вы набрали ${score * 2} Балла`);
        } else {
            console.log(`Вы набрали ${score} Балла`);
        }
    } else {
        console.log(`У вас -${score} Балла`);
        let z3 = +prompt('Сколько осталось Праймов?')
        if (z3 == a) {
            console.log(`Вы набрали ${score} Балла`);
        } else {
            console.log(`Вы набрали ${score - score} Балла`);
        }
    }

}

/*
Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
За каждый правильный ответ начисляется 2 балла.
После вопросов выведите пользователю количество набранных Баллов.
*/