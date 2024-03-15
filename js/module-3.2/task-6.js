//TODO:=========task-6=================
// Перетворити рядок, що містить слова, розділені комами, в масив слів
// і вивести кожне слово в окремому рядку.
// const str = "JavaScript, HTML, CSS, React";

const str = "JavaScript, HTML, CSS, React";

function makeWords(strNew) {
  const arr = strNew.split(",");
  for (const iterator of arr) {
    console.log(iterator);
  }
  return arr;
}

console.log(makeWords(str));
