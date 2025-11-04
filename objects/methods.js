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