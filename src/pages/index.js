import './index.css';
import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

import {
  popupIllustration,
  initialCards,
  configValidation,
  profileEditButton,
  profileName,
  profileProf,
  popupEditProfile,
  nameInput,
  profInput,
  popupProfileFormElement,
  popupAddCard,
  popupCardFormElement,
  popupCardFormSubmitButton,
  cardAddButton,
  cards,
  cardTemplate
} from '../scripts/utils/constants.js';

import {Section} from '../scripts/components/Section.js';



const profileEdit = new PopupWithForm(popupEditProfile, handleFormProfileSubmit);
profileEdit.setEventListeners();
const popupWithImage = new PopupWithImage(popupIllustration);
popupWithImage.setEventListeners();

const userInfo = new UserInfo({userName: profileName, userAbout: profileProf});

function disableButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', 'disabled');
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function createCard(link, image) {
  return new Card(link, image, cardTemplate, handleCardClick).renderCard()
}

const cardRender = new Section({items: initialCards, renderer: (items) => {
  const card = createCard(items.name, items.link)
  cardRender.addItem(card);
 }}, cards);
 cardRender.renderedItems();

const formAddCard = new PopupWithForm(popupAddCard, handleFormCardSubmit); 
formAddCard.setEventListeners();

function handleFormCardSubmit (evt, items) {
  evt.preventDefault();
  cardRender.addItem(createCard(items.name, items.image), cards);
  formAddCard.close();
  disableButton(popupCardFormSubmitButton, configValidation);
}



function handleFormProfileSubmit(evt, items) {
  evt.preventDefault();
  userInfo.setUserInfo(items.name, items.proffesion);
  profileEdit.close();
}

profileEditButton.addEventListener('click', () => {
  nameInput.value = userInfo.getUserInfo().userName;
  profInput.value = userInfo.getUserInfo().aboutUser;
  validateEditProfileForm.resetValidation();
  profileEdit.open();
});

cardAddButton.addEventListener('click', () => {
  validateAddCardForm.resetValidation();
  formAddCard.open();  
});

const validateAddCardForm = new FormValidator(configValidation, popupCardFormElement);
const validateEditProfileForm = new FormValidator(configValidation, popupProfileFormElement);

validateAddCardForm.enableValidation();
validateEditProfileForm.enableValidation();