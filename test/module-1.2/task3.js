// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

function makeSubString(string, length) {
  return string.slice(0, length);
}

console.log(makeSubString("Hello World!", 4));
