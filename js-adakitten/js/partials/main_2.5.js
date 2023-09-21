'use strict';
//FUNCIONES
// 2.5 Mostrar/ocultar el formulario
const newForm = document.querySelector('.js-new-form');
const linkNewFormElement = document.querySelector('.js-button-new-form');

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (linkNewFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

//Adicionar gatito

const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  } else {
    if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
      labelMessageError.innerHTML = ' ';
    }
  }
}

//Crear el gatito en HTML
function renderKitten(image, desc, name, race) {
  const kitten = `<li class="card">
    <article>
      <img
        class="card_img"
        src=${image}
        alt="gatito"
      />
      <h3 class="card_title">${name}</h3>
      <h3 class="card_race">${race}</h3>
      <p class="card_description">
      ${desc}
      </p>
    </article>
    </li>`;
  return kitten;
}

//Filtrar por descripción
const buttonSearch = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

function filterKitten(event) {
  event.preventDefault();
  listElement.innerHTML = '';

  if (kittenOneDesc.includes(descrSearchText)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenTwoDesc.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenThreeDesc.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
}

//Bonus:¿Y si no hay raza?
function renderRace(race) {
  let htmlRace = '';
  if (race === '') {
    htmlRace = `<p class="card_race">No se ha especificado la raza</p>`;
  } else {
    htmlRace = `<h3 class="card_race">${race}</h3>`;
  }
  return htmlRace;
}

//Filtrar por descripción
function filterKitten(event) {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    if (kittenItem.desc.includes(descrSearchText)) {
      listElement.innerHTML += renderKitten(kittenItem);
    }
  }
}

renderKittenList(kittenDataList);

//Eventos
buttonAdd.addEventListener('click', addNewKitten);

linkNewFormElement.addEventListener('click', handleClickNewCatForm);

buttonSearch.addEventListener('click', filterKitten);
