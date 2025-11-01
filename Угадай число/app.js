const secretNum = 5;
let tries = 0;

function guessNum(num) {
    while (tries <= 5) {
        if (num === secretNum) {
            alert('Вы угадали!')
            break;
        } else {
            alert(`Ошибка, осталось попыток ${5 - tries}`)
            tries++;
            break;
        }
    }
}