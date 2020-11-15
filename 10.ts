// C часов в секунды
function printSecond(hours: number, minutes: number, seconds: number) {
    minutes += hours * 60;
    seconds += minutes * 60;
    return seconds;
}

// C Секонды в часы
// function printHouer(second: number) {
//     let hours = Math.floor(second / 60 / 60);
//     let minutes = Math.floor(second / 60) - (hours * 60);
//     second = second % 60;
//     console.log(`${hours}:${minutes}:${second}`);
// }
function printHouer(second: number) {
    // C Секонды в часы
    let minutes = ~~(second / 60);
    let hours = ~~(minutes / 60);
    second -= minutes * 60;
    minutes -= hours * 60
    console.log(`${hours}:${minutes}:${second}`);
}

function dateDifference(h1: number, m1: number, s1: number, h2: number, m2: number, s2: number) {
    let diff = printSecond(h1, m1, s1) - printSecond(h2, m2, s2);
    console.log(diff);
    console.log(printSecond(h1, m1, s1));
    console.log(printSecond(h2, m2, s2));
    printHouer(diff);
}

dateDifference(23, 59, 59, 20, 30, 50);