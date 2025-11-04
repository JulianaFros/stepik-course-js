const dog = {
    name: 'Buddy',
    age: 3,
    color: 'brown',
    weight: 20,
}

dog.breed = 'Labrador';

console.log(dog.age);

for (let prop in dog) {
    console.log(dog[prop]);
}

numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}