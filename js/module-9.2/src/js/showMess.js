import calculateNumbers from "./calculateNumbers"

const result = calculateNumbers(2, 3)

console.log(result)


function showMess(result) {
    alert(`Hello, I am a message from showMess.js. Total amount is ${result}`)
    
}
showMess(result) 