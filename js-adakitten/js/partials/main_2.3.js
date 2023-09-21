'use strict';
//2.3 FILTRAR: Búsqueda por descripción
const listElement = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';

const kittenOne = `<li class="card">
  <article>
    <img class="card_img src=${kittenOneImage} alt="gatito" />
    <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
    <h4 class="card_race">${kittenOneRace}</h3>
    <p class="card_description">${kittenOneDesc}</p>
  </article>
</li>`;

//Gatito 2
const kittenTwoImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenTwoName = 'Anastacio';
const kittenTwoDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenTwoRace = 'Siamés';

const kittenTwo = `<li class="card">
  <article>
    <img class="card_img src=${kittenTwoImage} alt="gatito" />
    <h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
    <h4 class="card_race">${kittenTwoRace}</h3>
    <p class="card_description">${kittenTwoDesc}</p>
  </article>
</li>`;

//Gatito 3
const kittenThreeImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenThreeName = 'Anastacio';
const kittenThreeDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenThreeRace = 'Siamés';

const kittenThree = `<li class="card">
  <article>
    <img class="card_img src=${kittenThreeImage} alt="gatito" />
    <h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
    <h4 class="card_race">${kittenThreeRace}</h3>
    <p class="card_description">${kittenThreeDesc}</p>
  </article>
</li>`;

if (kittenOneDesc.includes(descrSearchText)) {
  listElement.innerHTML += kittenOne;
}

if (kittenTwoDesc.includes(descrSearchText)) {
  listElement.innerHTML += kittenTwo;
}

if (kittenThreeDesc.includes(descrSearchText)) {
  listElement.innerHTML += kittenThree;
}

//Bonus: ¿Y si no hay raza?
