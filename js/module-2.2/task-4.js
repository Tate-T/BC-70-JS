// Знайдіть добуток непарних числен від 3 до 9
let res = 1;
for (let i = 3; i <= 9; i++) {
    if (i % 2 !== 0) {
        res = res * i;
    }
}
console.log(res)
for (let i = 3; i <= 9; i++) {
    if (i % 2 === 0) {
        continue
    } else { res = res * i; }
}
for (let i = 3; i <= 9; i+=2) {
     res = res * i;
}