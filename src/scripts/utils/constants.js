export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const popupIllustration = document.querySelector('.popup-illustration-container');
export const popupIllustrationImg = popupIllustration.querySelector('.popup-illustration__img');
export const popupIllustrationImgTitle = popupIllustration.querySelector('.popup-illustration__title');

export const popupEditProfile = document.querySelector('.popup-edit-profile');
export const nameInput = popupEditProfile.querySelector('.popup__input_type_name'); 
export const profInput = popupEditProfile.querySelector('.popup__input_type_profession');
export const popupProfileFormElement = popupEditProfile.querySelector('.popup__form');

const profile = document.querySelector('.profile');
export const profileEditButton = profile.querySelector('.profile__edit-button');
export const profileName = profile.querySelector('.profile__title');
export const profileProf = profile.querySelector('.profile__subtitle');

export const popupAddCard = document.querySelector('.popup-add-card');
export const cardName = popupAddCard.querySelector('.popup__input_type_name');
export const cardImage = popupAddCard.querySelector('.popup__input_type_card-link');
export const popupCardFormElement = popupAddCard.querySelector('.popup__form');
export const popupCardFormSubmitButton = popupCardFormElement.querySelector('.popup__submit-button');

export const cardAddButton = profile.querySelector('.profile__add-button');
export const cards = document.querySelector('.cards'); 

export const cardTemplate = document.querySelector('.card-template').content;

export const ESCKEY = 'Escape';

export const initialCards = [
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
