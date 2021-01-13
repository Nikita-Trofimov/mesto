const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__title');
const profileProf = profile.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup');
const popupFormElement = popup.querySelector('.popup__container');
const nameInput = popupFormElement.querySelector('.popup__input_type_name'); 
const profInput = popupFormElement.querySelector('.popup__input_type_profession');
const popupCloseButton = popup.querySelector('.popup__close-button');
const cardAddButton = profile.querySelector('.profile__add-button');
const cards = document.querySelector('.cards');  




function addCard(imgSubTitel, imgSrc) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardElemnt = cardTemplate.cloneNode(true);
  const cardLike = cardElemnt.querySelector('.card__like');
  const cardImage = cardElemnt.querySelector('.card__image');
  cardElemnt.querySelector('.card__title').textContent = imgSubTitel;
  cardImage.src = imgSrc;
  cardImage.alt = imgSubTitel;
  cards.prepend(cardElemnt);
  
  const removeCardButtom = cards.querySelector('.card__remove');
  
  cardLike.addEventListener('click', (evt) => {
    cardLike.classList.toggle('card__like_black');
  });

  removeCardButtom.addEventListener('click', () => {
       removeCardButtom.closest('.card').remove();
  });
//  // переделать это
  cardImage.addEventListener('click', () => {
    
    let popup = popupIllistration.closest('.popup').classList.add('popup_opened');
    let popupIllistrationImg = popupIllistration.querySelector('.popup-illustration__img');
    let popupIllistrationImgTitle = popupIllistration.querySelector('.popup-illustration__title');
    console.log(imgSrc);
    popupIllistrationImg.src = imgSrc;
    popupIllistrationImg.alt = imgSubTitel;
    popupIllistrationImgTitle.textContent = imgSubTitel;
  });
//  // переделать это

}

initialCards.forEach( (item) => {
    addCard(item.name, item.link);
  });

  

function popupOpen(evt) {
  const popupTitle = popup.querySelector('.popup__title');
  const popupButton = popup.querySelector('.popup__submit-button');
  const popupForm = popupFormElement.querySelector('.popup__form');
  
  if (evt.target === profileEditButton) {
    popupForm.name = 'edit-profile';
    nameInput.value = profileName.textContent;
    profInput.value = profileProf.textContent;
    popupButton.textContent = 'Сохранить';
  } else if (evt.target === cardAddButton) {
    popupForm.name = 'add-card';
    popupTitle.textContent = 'Новое место';
    nameInput.value = '';
    nameInput.placeholder = 'Название'
    profInput.value = '';
    profInput.placeholder = 'Ссылка на картинку'
    popupButton.textContent = 'Создать';
  }
  popup.classList.add('popup_opened');
}
 // переделать это
const popupIllistration = document.querySelector('.popup-illustration');

popupIllistration.querySelector('.popup-illustration__close-button').addEventListener('click', () => {
  let popup = popupIllistration.closest('.popup').classList.remove('popup_opened');
});



// переделать это

function popupClose() {
  popup.classList.remove('popup_opened');
}



function handleFormSubmit(evt) {
  evt.preventDefault();
  if (evt.srcElement.name === 'edit-profile') {
    profileName.textContent = nameInput.value;
    profileProf.textContent = profInput.value;
  } else if (evt.srcElement.name === 'add-card') {
    addCard(nameInput.value, profInput.value);
    initialCards.push({name: nameInput.value, link: profInput.value})
  }
  popupClose();
}

profileEditButton.addEventListener('click', (evt) => {
  popupOpen(evt);
});

cardAddButton.addEventListener('click', (evt) => {
  popupOpen(evt);
});

popupCloseButton.addEventListener('click', popupClose);

popupFormElement.addEventListener('submit', (evt) => {
  handleFormSubmit(evt);
}); 