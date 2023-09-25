'use strict';

//Constantes que usamos en el HTML
const newForm = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');

const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');

const linkNewFormElement = document.querySelector('.js-button-new-form');

const buttonSearch = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');

//2.6 Convertir cada gatito en un objeto

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

// const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//FUNCIONES

function renderKitten(kittenData) {
  let html = '';
  if (kittenData.race === '') {
    html = `Uy, qué despiste, no sabemos su raza.`;
  } else {
    html = kittenData.race;
  }

  const kitten = `<li class="card">
  <article>
    <img
      class="card_img"
      src=${kittenData.image}
      alt="gatito"
    />
    <h3 class="card_title">${kittenData.name}</h3>
    <h3 class="card_race">${html}</h3>
    <p class="card_description">
    ${kittenData.desc}
    </p>
  </article>
  </li>`;
  return kitten;
}

function renderKittenList() {}

// 2.5 Mostrar/ocultar el formulario

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

//Adicionar gatito

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! Parece que has olvidado algo';
  } else {
    if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
      labelMessageError.innerHTML = ' ';

      //Dentro de esta función crea un nuevo objeto newKittenDataObject
      const newKittenDataObject = {
        image: valuePhoto,
        name: valueName,
        desc: valueDesc,
        race: valueRace,
      };

      //Agrega el objeto anterior al listado de gatitos
      kittenDataList.push(newKittenDataObject);

      //Limpia los valores de los inputs
      inputDesc.value = '';
      inputName.value = '';
      inputPhoto.value = '';
      inputRace.value = '';

      //Muestra un mensaje al usuario: "Mola! Un nuevo gatito en Adalab!".
      labelMessageError.innerHTML = '¡Mola! ¡Un nuevo gatito en Adalab!';
      //Vuelve a pintar el listado de gatitos
      renderKitten(kittenDataList);
    }
  }
}

//Cancelar formulario
function cancelNewKitten(event) {
  event.preventDefault();
  newForm.classList.add('collapsed');
  inputDesc.value = '';
  inputName.value = '';
  inputPhoto.value = '';
}

//Filtrar por descripción
//2.12
function filterKitten(event) {
  event.preventDefault();

  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_race.value;

  listElement.innerHTML = '';

  const newArray = kittenDataList
    .filter((kittenItem) => kittenItem.desc.includes(descrSearchText))
    .filter((kittenItem) => kittenItem.race.includes(raceSearchText));

  console.log(newArray);
  renderKittenList(newArray);
}

/*for (const kittenItem of kittenDataList) {
  if (kittenItem.desc.includes(descrSearchText)) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}*/

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    listElement.innerHTML += renderKitten(kittenItem);
  }
}



///Obtener listado de gatitos desde el servidor

const GITHUB_USER = '<CohenDaniela>';
const SERVER_URL = `https://dev.adalab.es/api/kittens/${GITHUB_USER}`;

let kittenDataList = [];

fetch(SERVER_URL).then((response) => response.json())
.then ((data) => {
  console.log(data)
  kittenDataList = data.results;
  renderKittenList(kittenDataList);
});





//Eventos

linkNewFormElement.addEventListener('click', handleClickNewCatForm);
buttonAdd.addEventListener('click', addNewKitten);
buttonCancelForm.addEventListener('click', cancelNewKitten);
buttonSearch.addEventListener('click', filterKitten);

