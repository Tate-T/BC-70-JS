// / Створіть об’єкт "user", який буде мати властивості "name", "email", "password".
//  метод "login", який буде перевіряти правильність введеного email та password.
// Використайте інпути для запису значень властивостей в об’єкт

const user = {
	user: 'MickyMouse',
	email: 'micky@gmail.com',
	password: 'micky123',
	login() {
		if (
			this.email !==
				prompt('Your email') &&
			this.password !==
				prompt('Pass')
		) {
			return 'Wrong e-mail and pass, check them';
		}
	},
};

console.log(user.login());
