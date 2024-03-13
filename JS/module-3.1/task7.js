//TODO:=========task-7=================
// Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий
// рядок, роділений дефісами у нижньому регістрі.

// Вихідні дані:
const message2 = "JavaScript is a popular programming language.";
function changeMessage(srt) {
  const array = message2.split(" ");
  // array.join('-');
  return array.join("-").toLowerCase();
}
console.log(changeMessage(message2));
