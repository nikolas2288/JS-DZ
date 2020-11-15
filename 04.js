/*
Запросить у пользователя его возраст и определить,
кем он является:
ребенком (0–2),
подростком (12–18), 
взрослым (18_60),
пенсионером (60– ...).
*/

const year = +prompt('')

if (year <= 2) {
    if (year < 0) {
        console.log('Еще не родился');
    } else {
        console.log('Ты наворожденный');
    }
}
else if (year <= 12) {
    console.log('Ты ребенок');
} else if (year <= 18) {
    console.log('Ты подросток');
} else if (year <= 60) {
    console.log('Ты взрослый');
} else if (year <= 100) {
    console.log('Ты пенсионер');
} else {
    console.log('скорее всего вы уже dead');
}
