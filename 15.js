/*
1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
и следующие функции для работы с этим объектом.
- Функция для вывода на экран информации об автомобиле.
- Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
*/
var car = {
    Manufacturer: 'Tesla',
    model: 'Tesla Cybertruck',
    release: 2019,
    midleSpeed: 100
};
// - Функция для вывода на экран информации об автомобиле.
function Info(c) {
    var information = '';
    for (var key in c) {
        information += "\n " + key + ": " + c[key];
    }
    alert(information);
}
// - Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
function SpeedRun(distance) {
    var sprintTime = 0;
    var speed = car.midleSpeed;
    var time = distance / speed;
    for (var index = 0; index <= time; index += 4) {
        sprintTime++;
    }
    console.log((distance / speed) + sprintTime - 1);
}
var obj = {
    numenator: 5,
    denomenator: 36
};
var obj2 = {
    numenator: 5,
    denomenator: 36
};
// - Функция сложения 2-х объектов-дробей.
function fractionAdditions(number, numberTwo) {
    if (number.denomenator == numberTwo.denomenator) {
        var resultOne = number.numenator * numberTwo.numenator;
        var resultTwo = number.denomenator;
        alert(resultOne + "\n----\n" + resultTwo);
    }
    else {
        var resultOne = (number.numenator * numberTwo.denomenator) + (number.denomenator * numberTwo.numenator);
        var resultTwo = number.denomenator * numberTwo.denomenator;
        alert(resultOne + "\n----\n" + resultTwo);
    }
}
// fractionAdditions(obj, obj2)
// - Функция вычитания 2-х объектов-дробей.
function fractionSubtraction(number) {
    if (number.denomenator == number.denomenator) {
        var resultOne = number.numenator * number.numenator;
        var resultTwo = number.denomenator;
        alert(resultOne + "\n----\n" + resultTwo);
    }
    else {
        var resultOne = (number.numenator * number.denomenator) - (number.denomenator * number.numenator);
        var resultTwo = number.denomenator * number.denomenator;
        alert(resultOne + "\n----\n" + resultTwo);
    }
}
// fractionSubtraction(obj)
// - Функция умножения 2-х объектов-дробей.
function fractionMultiplication(number) {
    var resultOne = number.numenator * number.numenator;
    var resultTwo = number.denomenator * number.denomenator;
    alert(resultOne + "\n" + resultTwo);
}
// fractionMultiplication(obj)
// - Функция деления 2-х объектов-дробей.
function fractionDivision(number) {
    var resultOne = number.numenator * number.denomenator;
    var resultTwo = number.denomenator * number.numenator;
    alert(resultOne + "\n" + resultTwo);
}
// fractionDivision(obj)
// - Функция сокращения объекта-дроби.
function fractionSimple(number) {
    var result = (number.numenator > number.denomenator) ? number.numenator : number.denomenator;
    while (result > 0) {
        if (number.numenator % result === 0 && number.denomenator % result === 0) {
            break;
        }
        result--;
        console.log(result);
    }
    var resultOne = number.numenator / result;
    var resultTwo = number.denomenator / result;
    alert(resultOne + "\n" + resultTwo);
}


/*
3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
- Функция вывода времени на экран.
- Функция изменения времени на переданное количество секунд.
- Функция изменения времени на переданное количество минут.
- Функция изменения времени на переданное количество часов.
Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
*/
var timeObject = {
    hours: 20,
    minutes: 30,
    seconds: 45
};
// - Функция вывода времени на экран.
function conclusionTimeInfo(timeObject) {
    var info = '';
    for (var key in timeObject) {
        info += key + ":" + timeObject[key] + " \n";
    }
    alert(info);
}
// - Функция изменения времени на переданное количество часов.
function remakeHours(hours) {
    timeObject.hours += hours;
}
// - Функция изменения времени на переданное количество минут.
function remakeMinutes(minutes) {
    timeObject.minutes += minutes;
}
// - Функция изменения времени на переданное количество секунд.
function remakeSeconds(seconds) {
    timeObject.seconds += seconds;
}
remakeSeconds(3600);
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
// Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
function printSecond(hours, minutes, second) {
    hours = timeObject.hours
    second = timeObject.seconds
    minutes += hours * 60;
    second += minutes * 60;
    printHouer(second)
}
printSecond(timeObject.hours, timeObject.minutes, timeObject.seconds)
function printHouer(second) {
    let hours = Math.floor(second / 60 / 60);
    let minutes = Math.floor(second / 60) - (hours * 60);
    second = second % 60;
    console.log(`${hours}:${minutes}:${second}`);
}
