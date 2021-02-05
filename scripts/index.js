const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__title');
const profileProf = profile.querySelector('.profile__subtitle');

const popupEditProfile = document.querySelector('.popup-edit-profile');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name'); 
const profInput = popupEditProfile.querySelector('.popup__input_type_profession');
const popupProfileFormElement = popupEditProfile.querySelector('.popup__form');

const popups = document.querySelectorAll('.popup')

const popupAddCard = document.querySelector('.popup-add-card');
const cardName = popupAddCard.querySelector('.popup__input_type_name');
const cardImage = popupAddCard.querySelector('.popup__input_type_card-link');
const popupCardFormElement = popupAddCard.querySelector('.popup__form');

const cardAddButton = profile.querySelector('.profile__add-button');
const cards = document.querySelector('.cards'); 

const cardTemplate = document.querySelector('.card-template').content;

const popupIllustration = document.querySelector('.popup-illustration-container');
const popupIllustrationImg = popupIllustration.querySelector('.popup-illustration__img');
const popupIllustrationImgTitle = popupIllustration.querySelector('.popup-illustration__title');

const popupOverlayArray = Array.from(document.querySelectorAll('.popup'));

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

function closePopupEscKey(evt) {
  if (evt.key ==='Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscKey);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscKey);
}

function closePopupClick(popups) {
  popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup);
        }
    });
  });
}

closePopupClick(popups);

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
  popupCardFormElement.querySelector('.popup__submit-button').classList.add('popup__button_disabled');
}

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
  openPopup(popupEditProfile)
});

cardAddButton.addEventListener('click', () => openPopup(popupAddCard));

popupProfileFormElement.addEventListener('submit', handleFormProfileSubmit);

popupCardFormElement.addEventListener('submit', handleFormCardSubmit);