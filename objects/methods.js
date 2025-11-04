const person = {
    name: 'Anna',
    surname: 'Dance',
    age: 18,
    greeting() {
        console.log('Hello!');
    },
    changeSurname(x) {
        this.surname = x;
        console.log(this.surname);
    },
};

person.greeting();
person.changeSurname('Smith');

const correctAnswer = 'JavaScript';
const userAnswer = ' javaScript! ';
const isCorrect = userAnswer.toLowerCase().includes(correctAnswer.toLowerCase().trim());
console.log(isCorrect);

const salary = 15000.2085;
const salaryFixed = salary.toFixed(2);
console.log(salaryFixed);