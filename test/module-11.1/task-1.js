// / Отримати список країн з REST Countries API Опис:
// Використайте публічне API REST Countries для отримання списку країн.Зробіть GET - запит за адресою
// https://restcountries.com/v3.1/all та перегляньте отримані дані про країни.

// const listOfCounries = document.querySelector(".list-contries")

// function getCountries()
// {
//     const data = fetch('https://restcountries.com/v3.1/all').then(response => {
//         if (!response.ok){
//             throw new Error(response.status);
//         }
//         return response.json();
//     });
//     return data

// };

// getCountries().then(response => createList(response))
// .catch(error =>{
//     console.log(error)
//     return error
// })

// function createMarkUp (country){
//     console.log(country)
//   const markUp = `<li class="country-item">
//   <h2 class="country-name">Name:${country.name.official} </h2>
//   <p class="capital">Capital: ${country.capital}</p>
//   <p class="lang">population:${country.population}</p>
//   <img class="country-photo" src="${country.flags.png}" alt="${country.flags.alt}" sizes="" srcset="">
// </li>`
// return markUp
// }

// function createList(data){
//     const newList = data.map((country) => createMarkUp(country))
//     const stringMarkUp = newList.join()
//    listOfCounries.insertAdjacentHTML("beforeend", stringMarkUp)
// }

// variant 2

const listOfCounries = document.querySelector(".list-contries");

function getCountries() {
  const data = fetch("https://restcountries.com/v3.1/all").then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  return data;
}

getCountries().then(response => createWithElement(response)).catch(error => {
  console.log(error);
  return error;
});

function createWithElement(country) {
  const countriesToAdd = country.map(onecountry => ({
    name: onecountry.name.official,
    capital: onecountry.capital,
    population: onecountry.population,
    img: onecountry.flags.png,
    imgAlt: onecountry.flags.alt
  }));

  countriesToAdd.forEach(element => {
    const countryItem = document.createElement("li");

    const countryName = document.createElement("h2");
    countryName.textContent = element.name;

    const countryCapital = document.createElement("p");
    countryCapital.textContent = element.capital;
    const countryPopulation = document.createElement("p");
    countryPopulation.textContent = element.population;
    
    const countryImg = document.createElement("img");
    countryImg.src = element.img
    countryImg.alt = element.imgAlt
    
    
    
    
    
     countryItem.append(countryName, countryCapital, countryPopulation, countryImg)
     listOfCounries.append(countryItem)
  }
 
);

  console.log(countriesToAdd);
}
