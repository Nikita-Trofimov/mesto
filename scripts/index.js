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
const popupCardFormElement = popupAddCard.querySelector('.popup__form');

const cardAddButton = profile.querySelector('.profile__add-button');
const cards = document.querySelector('.cards'); 

const cardTemplate = document.querySelector('.card-template').content;

const popupIllustration = document.querySelector('.popup-illustration').closest('.popup');
const popupIllustrationImg = popupIllustration.querySelector('.popup-illustration__img');
const popupIllustrationImgTitle = popupIllustration.querySelector('.popup-illustration__title');
const popupIllustrationCloseButton = popupIllustration.querySelector('.popup__close-button');

function createCard (cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardLike = cardElement.querySelector('.card__like');
  const cardImage = cardElement.querySelector('.card__image');
  const removeCardButton = cardElement.querySelector('.card__remove');   

  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardImage.alt = cardData.name;
  cardImage.src = cardData.link;

  cardLike.addEventListener('click', handleCardLike);
  removeCardButton.addEventListener('click', handleRemoveCard);
  cardImage.addEventListener('click', () => openIllustration(cardData));
  return cardElement;
}

function renderCard(cardData, wrap) {
  wrap.prepend(createCard(cardData));
}


initialCards.forEach( (item) => {
  renderCard(item, cards);
});

function openIllustration(cardData) {
  popupIllustrationImg.src = cardData.link;
  popupIllustrationImg.alt = cardData.name;
  popupIllustrationImgTitle.textContent = cardData.name;
  openPopup(popupIllustration);
}

function handleRemoveCard(evt) {
  evt.target.closest('.card').remove();
}  

function handleCardLike(evt) {
  evt.target.classList.toggle('card__like_black');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProf.textContent = profInput.value;
  closePopup(popupEditProfile);
}

function handleFormCardSubmit (evt) {
  evt.preventDefault();
  renderCard({ name: cardName.value, link: cardImage.value}, cards);
  popupCardFormElement.reset();
  closePopup(popupAddCard);

}

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
  openPopup(popupEditProfile)
});

cardAddButton.addEventListener('click', () => openPopup(popupAddCard));

popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard));

popupEditProfileClose.addEventListener('click', () => closePopup(popupEditProfile));

popupProfileFormElement.addEventListener('submit', handleFormProfileSubmit);

popupCardFormElement.addEventListener('submit', handleFormCardSubmit);

popupIllustrationCloseButton.addEventListener('click', () => closePopup(popupIllustration));