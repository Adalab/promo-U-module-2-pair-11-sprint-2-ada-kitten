'use strict';
//Elemento que usamos en el HTML
const listElement = document.querySelector('.js-list');

//Interpolar las variables
//Gatito 1
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

listElement.innerHTML = kittenOne + kittenTwo + kittenThree;

//Bonus Nombre de gatitos en mayúsculas
const nameUpperCase = kittenOneName.toUpperCase();
console.log(nameUpperCase);
