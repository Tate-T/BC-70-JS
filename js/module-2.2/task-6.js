// Знайдіть число 49  у проміжку чисел від 1 до 100 та вийдіть з циклу.

// for (let i = 1; i <= 100; i++) {
//     if (i === 49) {
//         console.log(i);
//     }
    
// }

// for (let i = 1; i <= 100; i++) {
//     if (i !== 49) {
//         console.log(i);
//     }
    
// }

for (let i = 1; i <= 100; i++) {
    if (i === 49) {
        continue;
    }
    else {console.log(i);}
    
}