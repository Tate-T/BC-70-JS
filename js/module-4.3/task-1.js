// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.

const dogs1 = [
    {
        name: 'Rick',
        id: 1,
        age: 2,

    },
    { name: 'Kiwi',
        id: 2,
        age: 4,
    },
    {
        name: 'Mango',
        id: 3,
        age: 1,
    },
    { name: 'Red',
        id: 2,
        age: 4,
    },
]
const dogs2 = [
     {
        name: 'Tim',
        id: 1,
        age: 2,

    },
    { name: 'Red',
        id: 2,
        age: 4,
    },
    {
        name: 'West',
        id: 3,
        age: 1,
    },
      {
        name: 'Rick',
        id: 1,
        age: 2,

    },
]
//1) Знайдемо масив обʼєктів без дубляжів по id
const allDogs = [...dogs1, ...dogs2];
// console.log(allDogs);
function findUnicDogs(allDogs) {
    const newList = [];
    for (const dog of allDogs) {
        let chek = 0;
        // console.log(dog);
        for (const element of newList) {
            if (element.id === dog.id) {
                chek = 1;
            }
                
              
        }
        if (chek === 0) {
        newList.push(dog)
        } else {
            chek = 0;
    }
    }
    return newList;
}
// console.log(findUnicDogs(allDogs));

//2)// Знайдемо об'єкт вякому будуть обʼєднанні обʼєкти з однаковим значенням ключа "id":

// function createUnicDogs() {
//         const allDogs = 
//         const unicDogs = {};
  
//         return unicDogs;
//     {
//         idArray:[1, 2, 3]
// }
//     }
// console.log(createUnicDogs());