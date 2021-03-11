import '../../pages/index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

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
  cardName,
  cardImage,
  popupCardFormElement,
  popupCardFormSubmitButton,
  cardAddButton,
  cards,
  cardTemplate
} from '../utils/constants.js';

import {Section} from '../components/Section.js';


const formAddCard = new PopupWithForm(popupAddCard, handleFormCardSubmit); 
const profileEdit = new PopupWithForm(popupEditProfile, handleFormProfileSubmit);
const userInfo = new UserInfo({userNameSelector: profileName, userAboutSelector: profileProf});

function disableButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', 'disabled');
}

function handleCardClick(name, link) {
  const popupWithImage = new PopupWithImage(name, link, popupIllustration)
  popupWithImage.setEventListeners();
  popupWithImage.open();
}

function createCard(link, image) {
  return new Card(link, image, cardTemplate, handleCardClick).renderCard()
}

const CardRender = new Section({items: initialCards, renderer: (items) => {
  const card = createCard(items.name, items.link)
  CardRender.addItem(card);
 }}, cards);
 CardRender.renderedItems();


function handleFormCardSubmit (evt) {
  evt.preventDefault();
  CardRender.addItem(createCard(cardName.value, cardImage.value), cards);
  formAddCard.close();
  disableButton(popupCardFormSubmitButton, configValidation);
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo(nameInput.value, profInput.value);
  profileEdit.close();
}

profileEditButton.addEventListener('click', () => {
  nameInput.value = userInfo.getUserInfo().userName;
  profInput.value = userInfo.getUserInfo().aboutUser;
  validateEditProfileForm.resetValidation();
  profileEdit.open();
  profileEdit.setEventListeners();
});

cardAddButton.addEventListener('click', () => {
  validateAddCardForm.resetValidation();
  formAddCard.open();
  formAddCard.setEventListeners();
});

const validateAddCardForm = new FormValidator(configValidation, popupCardFormElement);
const validateEditProfileForm = new FormValidator(configValidation, popupProfileFormElement);

validateAddCardForm.enableValidation();
validateEditProfileForm.enableValidation();