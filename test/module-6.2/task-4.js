// Створіть клас Shape, який має властивість color і метод draw.
//Створіть клас Circle, який наслідується від Shape і має властивість radius
// та перезаписує метод draw для відображення кола.
// Створіть об'єкт myCircle класу Circle з радіусом 5 і коліром "red".
// const myCircle = new Circle('red', 5);
// myCircle.draw(); // Drawing a circle with radius 5
// console.log(myCircle.color); // "red"

class Shape {
  constructor(color, radius) {
    this.color = color;
    this.radius = radius;
  }

  draw() {
    return `Drawing a circle with radius ${this.radius}`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color, radius);
  }
}

const myCircle = new Circle("red", 5);
console.log(myCircle.draw()); // Drawing a circle with radius 5
console.log(myCircle.color); // "red"

const myCircle2 = new Circle("blue", 10);
console.log(myCircle2.draw()); // Drawing a circle with radius 10
console.log(myCircle2.color); // "blue"
