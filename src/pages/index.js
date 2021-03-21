import './index.css';
import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';

import {
  popupIllustration,
  configValidation,
  profileEditButton,
  profileName,
  profileProf,
  profileAvatar,
  popupEditProfile,
  nameInput,
  profInput,
  popupProfileFormElement,
  popupAddCard,
  popupCardFormElement,
  popupCardFormSubmitButton,
  cardAddButton,
  cardsContainer,
  cardTemplate,
  token,
  server
} from '../scripts/utils/constants.js';

import {Section} from '../scripts/components/Section.js';

const profileEdit = new PopupWithForm(popupEditProfile, handleFormProfileSubmit);
profileEdit.setEventListeners();
const popupWithImage = new PopupWithImage(popupIllustration);
popupWithImage.setEventListeners();

const userInfo = new UserInfo({userName: profileName, userAbout: profileProf});

const api = new Api({
  baseUrl: server,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

const cardRender =  new Section({renderer: (cards) => {
  const card = createCard(cards.name, cards.link, cards.likes.length)
  cardRender.addItem(card);
 }}, cardsContainer);

api.getInitialCards('/cards').then((cards) => {
  cardRender.renderedItems(cards);
}).catch(err => console.log('Ошибка ' + err));

api.getProfile('/users/me').then((profile) => {
  profileName.textContent = profile.name;
  profileProf.textContent = profile.about;
  profileAvatar.src = profile.avatar;
}).catch(err => console.log('Ошибка ' + err));

function disableButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', 'disabled');
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function createCard(link, image, cardNumbersLikes) {
  return new Card(link, image, cardNumbersLikes, cardTemplate, handleCardClick).renderCard()
}

const formAddCard = new PopupWithForm(popupAddCard, handleFormCardSubmit); 
formAddCard.setEventListeners();

function handleFormCardSubmit (evt, items) {
  evt.preventDefault();
  api.addCard(items.name, items.image).then((res) => {
     cardRender.addItem(createCard(items.name, items.image), cardsContainer);
     formAddCard.close();
  }).catch(err => console.log('Ошибка ' + err));;
  disableButton(popupCardFormSubmitButton, configValidation);
}

function handleFormProfileSubmit(evt, items) {
  evt.preventDefault();
  api.updateProfile(items.name, items.proffesion).then((res) => {
    userInfo.setUserInfo(items.name, items.proffesion);
    profileEdit.close();
  }).catch(err => console.log('Ошибка ' + err));;
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