//Отримати погоду за допомогою OpenWeatherMap API Опис:
// Використайте публічне API OpenWeatherMap для отримання поточної погоди.
// Зробіть GET - запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
// де { city } - назва міста, а { API_KEY } - ваш ключ API OpenWeatherMap.
// Перегляньте отримані дані щодо погоди.

const formElem = document.querySelector('.form')
const inputElem = document.querySelector('.form-input')
const btnElem = document.querySelector('.form-btn')
const listElem = document.querySelector('.list')

const KEY_API = 'ff42a483ab55ee5202a1a3e6ecc35891'
const START_URL = 'https://api.openweathermap.org'

function getFetch(city) {
    return fetch(`${START_URL}//data/2.5/weather?q=${city}&appid=${KEY_API}`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status)
        }
        return resp.json()
    })
}

function getInput(event) {
    event.preventDefault()

    const inputValue = event.target.elements.input.value

    getFetch(inputValue).then((data) => {
       const res = markUp(data)
       console.dir(res)
       listElem.insertAdjacentHTML('afterbegin', res)
        return data
    }).catch(error => console.log(error))

}

function markUp(data) {
    const items = `
        <li>Місто ${data.name}</li>
        <li>Хмарність ${data.clouds.all}</li>
        <li>Температура ${data.main.temp}</li>
    `
    console.log(typeof items)
    return items
}


formElem.addEventListener('submit', getInput)