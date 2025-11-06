var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer() {
        const correctAnswer = 'Правильный ответ:';
        const uncorrectAnswer = 'Неправильный ответ. Попробуйте еще раз.';
        const noTries = 'Попытки закончились.';

        if (this.tries === 0) {
            alert(noTries);
            console.log(noTries);
            return;
        }

        if (guessedAnswer.toLowerCase() === this.correctAnswer) {
            alert(correctAnswer);
            console.log(correctAnswer);
        } else {
            this.tries--;
            if (this.tries > 0) {
                alert(uncorrectAnswer);
                console.log(uncorrectAnswer);
            } else {
                alert(noTries);
                console.log(noTries);
            }
        }
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        
    }
}