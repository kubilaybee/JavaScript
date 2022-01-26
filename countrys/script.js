'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Our First AJAX Calll: XMLHttpRequest
/*

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}M</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country -1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country firstCt
    renderCountry(data);

    // get neighbour country (step-2)
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX call country -2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('france');

setTimeout(() => {
  console.log('1 sec passed');
  setTimeout(() => {
    console.log('2 sec passed');
    setTimeout(() => {
      console.log('3 sec passed');
    }, 3000);
  }, 2000);
}, 1000);
*/

// TODO move to indexHTML
const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)}M</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  // test define
  // document.getElementsByClassName('country').className += data.name;
  // document.getElementsByClassName('country__img').src = data.flags.png;
  // document.getElementsByClassName('country__name').innerText = data.name;
  // document.getElementsByClassName(
  //   'country__region'
  // ).innerText = `${data.region}`; //reg
  // document.getElementsByClassName('country__row__popu').innerText =
  //   (data.population / 1000000).toFixed(1) + ' M'; //popu
  // document.getElementsByClassName('country__row__lang').innerText =
  //   data.languages[0].name; //lang
  // document.getElementsByClassName('country__row__curr').innerText =
  //   data.currencies[0].name; //curren

  countriesContainer.style.opacity = 1;
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + data.name + "')";
};

// Promises

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
// request.send();

// const country = 'usa';
// const request = fetch(`https://restcountries.com/v2/name/${country}`);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // ct -2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      alert('The country is not define !?');
    });
};

const removeElements = function () {
  // clear the list
  document.querySelector('.country').remove();
  if (document.querySelector('.country')) {
    document.querySelector('.country').remove();
  }
};

const search = function () {
  // clear the search-bar
  getCountryData(document.querySelector('.search-bar').value);
  removeElements();
  // FIX search bar
  document.querySelector('.search-bar').value = '';
};

// button Listener function
document.querySelector('.search-btn').addEventListener('click', function () {
  search();
});

// enter key listener function
document
  .querySelector('.search-bar')
  .addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
      search();
    }
  });

getCountryData('fra');
