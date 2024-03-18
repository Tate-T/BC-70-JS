// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина".
//Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини
//та ширини.

const rectangle = {
  length: 5,
  width: 10,
  calculateArea() {
    return this.length * this.width;
  },
};

console.log(rectangle.calculateArea());
