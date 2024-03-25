// Створіть клас Product, що містить властивості name, price, та discount. 
// Додайте метод getDiscountPrice(), який повертає ціну товару зі знижкою,
//  якщо така є (якщо властивість discount є ненульовим числом, знижка 
//     відсотків від ціни повинна бути застосована).
// const product1 = new Product('Phone', 500, 10);
// console.log(product1.getDiscountPrice()); // 450

class Product {
    constructor(name,price,discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    getDiscountPrice() {
        if(this.discount > 0) {
            const discountAmount = this.price - ((this.discount * this.price) / 100);
            return discountAmount;
        } 
    
    }
}
const product1 = new Product('Phone', 500, 10);
console.log(product1.getDiscountPrice()); // 450