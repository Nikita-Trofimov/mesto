export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const token = '2e08f9f0-442c-48d2-af92-1c14d5165bb1';
export const server = 'https://mesto.nomoreparties.co/v1/cohort-21'

export const popupIllustration = document.querySelector('.popup-illustration-container');

export const popupEditProfile = document.querySelector('.popup-edit-profile');
export const nameInput = popupEditProfile.querySelector('.popup__input_type_name'); 
export const profInput = popupEditProfile.querySelector('.popup__input_type_profession');
export const popupProfileFormElement = popupEditProfile.querySelector('.popup__form');
export const popupEditProfileSubmitButton = popupProfileFormElement.querySelector('.popup__submit-button');

const profile = document.querySelector('.profile');
export const profileEditButton = profile.querySelector('.profile__edit-button');
export const profileName = profile.querySelector('.profile__title');
export const profileProf = profile.querySelector('.profile__subtitle');
export const profileAvatar = profile.querySelector('.profile__photo');

export const popupAddCard = document.querySelector('.popup-add-card');
export const popupCardFormElement = popupAddCard.querySelector('.popup__form');
export const popupCardFormSubmitButton = popupCardFormElement.querySelector('.popup__submit-button');

export const cardAddButton = profile.querySelector('.profile__add-button');
export const cardsContainer = document.querySelector('.cards'); 

export const cardTemplate = document.querySelector('.card-template').content;

export const popupConfirm = document.querySelector('.popup-remove-confirm');

export const popupUpdateAvatar = document.querySelector('.popup-edit-avatar');
export const formUpdateAvatar = popupUpdateAvatar.querySelector('.popup__form');
export const avatarLink = formUpdateAvatar.querySelector('.popup__input_type_avtar-link');
export const popupUpdateAvatarSubmitButton = formUpdateAvatar.querySelector('.popup__submit-button');

export const ESCKEY = 'Escape';