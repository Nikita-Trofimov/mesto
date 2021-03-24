import './index.css';
import {Card} from '../scripts/components/Card.js';
import {FormValidator} from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupConfirm  from '../scripts/components/PopupConfirm';
import UserInfo from '../scripts/components/UserInfo.js';
import Section from '../scripts/components/Section.js';
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
  server,
} from '../scripts/utils/constants.js';

const popupConfirm = new PopupConfirm(document.querySelector('.popup-remove-confirm'));
popupConfirm.setEventListeners();
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
  const card = createCard(cards.owner._id, cards.name, cards.link, cards.likes.length)
  cardRender.addItem(card);
 }}, cardsContainer);

api.getInitialCards('/cards').then((cards) => {
  cardRender.renderedItems(cards);
}).catch(err => console.log('Ошибка ' + err));

let myId;
api.getProfile('/users/me').then((profile) => {
  profileName.textContent = profile.name;
  profileProf.textContent = profile.about;
  profileAvatar.src = profile.avatar;
  myId =  profile._id;
}).catch(err => console.log('Ошибка ' + err));

function disableButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', 'disabled');
}

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function createCard(cardId, link, image, cardNumbersLikes) {
  return new Card(myId ,cardId, link, image, cardNumbersLikes, cardTemplate, handleCardClick, handleDeleteIconClick).renderCard()
}

const formAddCard = new PopupWithForm(popupAddCard, handleFormCardSubmit); 
formAddCard.setEventListeners();

function handleFormCardSubmit (evt, items) {
  evt.preventDefault();
  api.addCard(items.name, items.image).then((res) => {
     cardRender.addItem(createCard(res.owner._id, res.name, res.link, res.likes.length ), cardsContainer);
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

function handleDeleteIconClick() {
  popupConfirm.open();
}

const validateAddCardForm = new FormValidator(configValidation, popupCardFormElement);
const validateEditProfileForm = new FormValidator(configValidation, popupProfileFormElement);

validateAddCardForm.enableValidation();
validateEditProfileForm.enableValidation();