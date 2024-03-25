// Створіть клас Person, що містить властивості firstName та lastName. Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe


class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

}

const person2 = new Person ('John', 'Doe');
console.log (person2.getFullName())