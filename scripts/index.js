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
const popupCardFormSubmitButton = popupCardFormElement.querySelector('.popup__submit-button');

const cardAddButton = profile.querySelector('.profile__add-button');
const cards = document.querySelector('.cards'); 

const cardTemplate = document.querySelector('.card-template').content;

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
  renderCard(new Card(cardName.value, cardImage.value, cardTemplate).renderCard(), cards);
  popupCardFormElement.reset();
  closePopup(popupAddCard);
  disableButton(popupCardFormSubmitButton, configValidation);
}

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
  openPopup(popupEditProfile)
});

cardAddButton.addEventListener('click', () => openPopup(popupAddCard));

popupProfileFormElement.addEventListener('submit', handleFormProfileSubmit);

popupCardFormElement.addEventListener('submit', handleFormCardSubmit);

import {Card} from './Card.js';

function renderCard(card, wrap) {
  wrap.prepend(card);
}

initialCards.forEach( (item) => {
  renderCard(new Card(item.name, item.link, cardTemplate).renderCard(), cards);
});