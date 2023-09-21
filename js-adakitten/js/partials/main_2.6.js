'use strict';

//2.6 Convertir cada gatito en un objeto
const dataList = document.querySelector('.js-list');

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

//Crear el gatito en HTML. Modifica la función renderKitten() para que reciba un objeto como parámetro.
function renderKitten(kittenData) {
  const kitten = `<li class="card">
      <article>
        <img
          class="card_img"
          src=${kittenData.image}
          alt="gatito"
        />
        <h3 class="card_title">${kittenData.name}</h3>
        <h3 class="card_race">${kittenData.race}</h3>
        <p class="card_description">
        ${kittenData.desc}
        </p>
      </article>
      </li>`;
  return kitten;
}

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//Crear listado de gatitos II
function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}
