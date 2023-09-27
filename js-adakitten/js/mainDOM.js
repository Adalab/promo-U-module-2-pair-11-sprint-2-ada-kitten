'use strict'

function renderKitten(kittenData) {
   
  
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
    const newLi = document.createElement('li');
    console.log (newLi)
    newLi.classList.add('card')
    const newArticle = document.createElement('article');
    newLi.appendChild(newArticle);

   
    return newLi;

    
  }
  
  function renderKittenList(kittenDataList) {

    for (const item of kittenDataList) {
        const liNweKitten = renderKitten(item)
        
    }




  }

  
