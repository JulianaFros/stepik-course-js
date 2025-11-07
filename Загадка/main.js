var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(guessedAnswer) {
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
                
                const hint = this.hints[this.tries === 2 ? 0 : 1];

                if (this.tries) {
                    alert('Подсказка: ' + hint);
                }
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
        riddle.checkAnswer(guessedAnswer);
    }
}