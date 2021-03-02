const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const ESCKEY = 'Escape';

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileName = profile.querySelector('.profile__title');
const profileProf = profile.querySelector('.profile__subtitle');

const popupEditProfile = document.querySelector('.popup-edit-profile');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name'); 
const profInput = popupEditProfile.querySelector('.popup__input_type_profession');
const popupProfileFormElement = popupEditProfile.querySelector('.popup__form');

const popups = document.querySelectorAll('.popup');

const popupAddCard = document.querySelector('.popup-add-card');
const cardName = popupAddCard.querySelector('.popup__input_type_name');
const cardImage = popupAddCard.querySelector('.popup__input_type_card-link');
const popupCardFormElement = popupAddCard.querySelector('.popup__form');
const popupCardFormSubmitButton = popupCardFormElement.querySelector('.popup__submit-button');

const cardAddButton = profile.querySelector('.profile__add-button');
const cards = document.querySelector('.cards'); 

const popupIllustration = document.querySelector('.popup-illustration-container');
const popupIllustrationImg = popupIllustration.querySelector('.popup-illustration__img');
const popupIllustrationImgTitle = popupIllustration.querySelector('.popup-illustration__title');

const cardTemplate = document.querySelector('.card-template').content;

function closePopupEscKey(evt) {
  if (evt.key === ESCKEY) {
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

function disableButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', 'disabled');
}

function handleCardClick(name, link) {
  popupIllustrationImg.src = link
  popupIllustrationImgTitle.textContent = name
  openPopup(popupIllustration)
}

function renderCard(card, wrap) {
  wrap.prepend(card);
}

function createCard(link, image, handleCardClick) {
  return new Card(link, image, handleCardClick).renderCard()
}

function handleFormCardSubmit (evt) {
  evt.preventDefault();
  renderCard(createCard(cardName.value, cardImage.value, cardTemplate, handleCardClick), cards);
  popupCardFormElement.reset();
  closePopup(popupAddCard);
  disableButton(popupCardFormSubmitButton, configValidation);
}

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
  validateEditProfileForm.resetValidation();
  openPopup(popupEditProfile)
});

cardAddButton.addEventListener('click', () => {
  validateAddCardForm.resetValidation();
  popupCardFormElement.reset();
  openPopup(popupAddCard)
});

popupProfileFormElement.addEventListener('submit', handleFormProfileSubmit);

popupCardFormElement.addEventListener('submit', handleFormCardSubmit);

initialCards.forEach( (item) => {
  renderCard(createCard(item.name, item.link, cardTemplate, handleCardClick), cards);
});

const validateAddCardForm = new FormValidator(configValidation, popupCardFormElement);
const validateEditProfileForm = new FormValidator(configValidation, popupProfileFormElement);

validateAddCardForm.enableValidation();
validateEditProfileForm.enableValidation();