'use strict';
//2.4 FORMULARIO: Adicionar nuevo gatito
const newForm = document.querySelector('.js-new-form');

const buttonAdd = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

buttonAdd.addEventListener('click', (event) => {
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
});

//Cancelar formulario
const buttonCancelForm = document.querySelector('.js-btn-cancel');

function cancelNewKitten(event) {
  event.preventDefault();
  inputDesc.value = '';
  inputName.value = '';
  inputPhoto.value = '';
  newform.classList.add('collapsed');
}

buttonCancelForm.addEventListener('click', cancelNewKitten);
