// Створіть клас Rectangle, що містить властивості width та height. Додайте метод getArea(), який повертає площу прямокутника.
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

// class Rectangle {
  

//     constructor(width, heigth) {
//         this.width = width
//         this.heigth = heigth
//     }

//     getArea() {
//         return this.width * this.heigth
//     }

    
// }
// const rectangle1 = new Rectangle(10, 5);

// Робимо через геттер
class Rectangle {
    constructor(width, heigth) {
        this._width = width
        this._heigth = heigth
    }

    get width() {
        return  this._width
    }

    set width(newWidth) {
        this._width = newWidth;
    }

    get heigth() {
        return this._heigth
    }

    set heigth(newHeigth) {
        this._heigth = newHeigth
    }
}
const rectangle1 = new Rectangle(15, 5);

console.log(rectangle1.width)
console.log(rectangle1.width = 20)
console.log(rectangle1.width)