const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__title');
const profileProf = profile.querySelector('.profile__subtitle');

const popupEditProfile = document.querySelector('.popup-edit-profile');
const popupEditProfileClose = popupEditProfile.querySelector('.popup__close-button');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name'); 
const profInput = popupEditProfile.querySelector('.popup__input_type_profession');
const popupProfileFormElement = popupEditProfile.querySelector('.popup__form');

const popupAddCard = document.querySelector('.popup-add-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__close-button');
const cardName = popupAddCard.querySelector('.popup__input_type_name');
const cardImage = popupAddCard.querySelector('.popup__input_type_card-link');
const popupCardFormElemet = popupAddCard.querySelector('.popup__form');

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
  cardLike.addEventListener('click', handleCardLike);
  removeCardButtom.addEventListener('click', handleRemoveCard);
  cardImage.addEventListener('click', () => {openIllistration(imgSubTitel,imgSrc)});
}

initialCards.forEach( (item) => {
  addCard(item.name, item.link);
});

function openIllistration(imgSubTitel, imgSrc) {
  const popupIllistration = document.querySelector('.popup-illustration');
  const popupIllistrationImg = popupIllistration.querySelector('.popup-illustration__img');
  const popupIllistrationImgTitle = popupIllistration.querySelector('.popup-illustration__title');
  popupOpen(popupIllistrationImg.closest('.popup'));
  popupIllistrationImg.src = imgSrc;
  popupIllistrationImg.alt = imgSubTitel;
  popupIllistrationImgTitle.textContent = imgSubTitel;
  popupIllistration.querySelector('.popup__close-button').addEventListener('click', popupClose);
}

function handleRemoveCard(evt) {
  evt.target.closest('.card').remove();
}  

function handleCardLike(evt) {
  evt.target.classList.toggle('card__like_black');
}

function popupOpen(element) {
  element.classList.add('popup_opened');
  if (element === popupEditProfile) {
    nameInput.value = profileName.textContent;
    profInput.value = profileProf.textContent;
  }
}

function popupClose(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

function hadleFormSubmit(evt) {
  evt.preventDefault();
  if (evt.srcElement.name === 'edit-profile') {
    profileName.textContent = nameInput.value;
    profileProf.textContent = profInput.value;
  } else if (evt.srcElement.name === 'add-card') {
    addCard(cardName.value, cardImage.value);
    cardName.value = null;
    cardImage.value = null;
  }
  popupClose(evt);
}

profileEditButton.addEventListener('click', () => popupOpen(popupEditProfile));

cardAddButton.addEventListener('click', () => popupOpen(popupAddCard));

popupAddCardClose.addEventListener('click', popupClose);

popupEditProfileClose.addEventListener('click', popupClose);

popupProfileFormElement.addEventListener('submit',hadleFormSubmit);

popupCardFormElemet.addEventListener('submit', hadleFormSubmit);