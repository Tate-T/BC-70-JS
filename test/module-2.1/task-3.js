// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

const userAge = 5;
function getNameGroup(age) {
    let result;
    if (age >= 0 && age <= 16) {
        result = "Children";
    } else if (age >= 17 && age <= 60) {
        result = "Adult";
    } else {
        result = "Pensioners"
    }
    return result
}
let res = getNameGroup(userAge);
console.log(res);