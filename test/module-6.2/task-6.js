//Створіть клас Animal, який має властивість name. Створіть клас Dog, який наслідується від Animal і має властивість breed. Створіть об'єкт myDog класу Dog з ім'ям Buddy і породою Labrador Retriever.

// const cat = new Cat();
// cat.makeSound(); // "Meow"
// class Animal{
//     constructor(name) {
//         this.name = name;
//     }

// }
// class Dog extends Animal {
//   constructor(name, breed) {
//       super(name);
//       this.breed = breed;
//   }
// }
// const myDog = new Dog('Buddy', 'Labrador Retriever');
// console.log(myDog); // { name: 'Buddy', breed: 'Labrador Retriever' }

//Нехай є базовий клас Animal з методом makeSound(). Створіть підклас Cat, який буде наслідувати Animal та перевизначати метод makeSound().

class Animal {
  static owner = "";
  #passwordData;
  constructor(name, passwordData) {
    this.#passwordData = passwordData;
    this.name = name;
  }
  makeSound(str) {
    console.log(`${str}`);
  }
  get passwordData() {
    return this.#passwordData;
  }
  set passwordData(passwordData) {
    this.#passwordData = passwordData;
    }
    static showOwner() {
        console.log(this.owner);
    }
}
class Cat extends Animal {
  constructor(name, passwordData) {
    super(name, passwordData);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  makeSound() {
    console.log("Dogs can gavkaty");
  }
}
const animal = new Animal();
animal.makeSound("The animal makes a sound"); // "The animal makes a sound"
Animal.showOwner()

const cat = new Cat("Barsik", "123qwe");
cat.makeSound("Meow"); // "Meow"

console.log(cat.passwordData);
cat.passwordData = "123456789";
console.log(cat.passwordData);

const dog = new Dog();
dog.makeSound();
