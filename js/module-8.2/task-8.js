//  Напишіть функцію, яка отримує об'єкт
// зі списком електронних адрес(поле "emails") та використовує
// деструктуризацію для повернення першої адреси в цьому списку.

const person = {
  name: "John",
  emails: ["john@gmail.com", "john@example.com", "john123@yahoo.com"],
};

const getFirstEmail = ({ name, emails }) => {
  const [firstEmail, ...otherEmails] = emails;
  return firstEmail;
};

console.log(getFirstEmail(person)); // 'john@gmail.com'
