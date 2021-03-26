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
  popupEditProfileSubmitButton,
  popupAddCard,
  popupCardFormElement,
  popupCardFormSubmitButton,
  cardAddButton,
  cardsContainer,
  cardTemplate,
  token,
  server,
  popupUpdateAvatar,
  formUpdateAvatar,
  popupUpdateAvatarSubmitButton,
  avatarLink
} from '../scripts/utils/constants.js';

const updateAvatar = new PopupWithForm(popupUpdateAvatar, handleUpdateAvatar);
updateAvatar.setEventListeners();
const popupConfirm = new PopupConfirm(document.querySelector('.popup-remove-confirm'), handleConfirmButton);
popupConfirm.setEventListeners();
const profileEdit = new PopupWithForm(popupEditProfile, handleFormProfileSubmit);
profileEdit.setEventListeners();
const popupWithImage = new PopupWithImage(popupIllustration);
popupWithImage.setEventListeners();
const formAddCard = new PopupWithForm(popupAddCard, handleFormCardSubmit); 
formAddCard.setEventListeners();

const userInfo = new UserInfo({userName: profileName, userAbout: profileProf});

const api = new Api({
  baseUrl: server,
  headers: {
    authorization: token,
    'Content-Type': 'application/json'
  }
});

const cardRender =  new Section({renderer: (cards) => {
  const card = createCard(cards.owner._id, cards.name, cards.link,cards._id, cards.likes)
  cardRender.addItem(card);
 }}, cardsContainer);

let myId;

api.getInitialData()
.then((res) => {
  const [cards, profile] = res;
  profileName.textContent = profile.name;
  profileProf.textContent = profile.about;
  profileAvatar.src = profile.avatar;
  myId =  profile._id;
  cardRender.renderedItems(cards);
})
.catch(err => console.log('Ошибка ' + err));

function disableButton(button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.setAttribute('disabled', 'disabled');
}

function waitResponse(button) {
  button.textContent = 'Сохранение...';
  button.setAttribute('disabled', 'disabled');
}

function createCard(cardOwnerId, link, image, cardId, likes) {
  let card = new Card(myId ,cardOwnerId, link, image, cardId, likes, cardTemplate, 
    handleCardClick, handleDeleteIconClick, handleLikeCard)
    .renderCard()
  return card;
}

profileEditButton.addEventListener('click', () => {
  popupEditProfileSubmitButton.textContent = 'Сохранить';
  nameInput.value = userInfo.getUserInfo().userName;
  profInput.value = userInfo.getUserInfo().aboutUser;
  validateEditProfileForm.resetValidation();
  profileEdit.open();
});

cardAddButton.addEventListener('click', () => {
  popupCardFormSubmitButton.textContent = 'Сохранить';
  validateAddCardForm.resetValidation();
  formAddCard.open();  
});

profileAvatar.addEventListener('click', () => {
  popupUpdateAvatarSubmitButton.textContent = 'Сохранить';
  validateUpdateAvatarForm.resetValidation();
  updateAvatar.open()
});

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function handleFormCardSubmit (evt, items) {
  evt.preventDefault();
  waitResponse(popupCardFormSubmitButton);
  api.addCard(items.name, items.image).then((res) => {
     let card = createCard(res.owner._id, res.name, res.link, res._id, res.likes);
     cardRender.addItem(card, cardsContainer);
     formAddCard.close();
     disableButton(popupCardFormSubmitButton, configValidation);
  }).catch(err => console.log('Ошибка ' + err));;
}

function handleFormProfileSubmit(evt, items) {
  evt.preventDefault();
  waitResponse(popupEditProfileSubmitButton);
  api.updateProfile(items.name, items.proffesion).then((res) => {
    userInfo.setUserInfo(res.name, res.about);
    profileEdit.close();
  }).catch(err => console.log('Ошибка ' + err));
}

function handleUpdateAvatar (evt) {
  waitResponse(popupUpdateAvatarSubmitButton);
  evt.preventDefault();
  api.udpateAvatar(avatarLink.value)
  .then((res) => {
    profileAvatar.src = res.avatar
    updateAvatar.close();
  })
  .catch(err => console.log('Ошибка ' + err));

}

function handleDeleteIconClick(evt) {
  popupConfirm.open(evt.target.closest('.card'), this._cardId);
}

function handleConfirmButton(evt, cardElement, cardId) {
    evt.preventDefault();
    api.removeCard(cardId)
    .then((res) => {
      cardElement.remove();
      popupConfirm.close();
    })
    .catch(err => console.log('Ошибка ' + err));
 }

function handleLikeCard(evt, cardId, card) {
  if(!card.isLiked) {
    api.likeCard(cardId)
    .then((res) => {
        evt.target.classList.toggle('card__like_black');  
        evt.target.closest('.card__like-info-container').
        querySelector('.card__likes-number').textContent = res.likes.length;
      })
    .catch(err => console.log('Ошибка ' + err));
    }
  else api.removeLike(cardId)
  .then((res) => {
    evt.target.classList.toggle('card__like_black');  
    evt.target.closest('.card__like-info-container').
    querySelector('.card__likes-number').textContent = res.likes.length;
  })
  .catch(err => console.log('Ошибка ' + err));
  card.setLikeInfo();
}

const validateAddCardForm = new FormValidator(configValidation, popupCardFormElement);
const validateEditProfileForm = new FormValidator(configValidation, popupProfileFormElement);
const validateUpdateAvatarForm = new FormValidator(configValidation, formUpdateAvatar);
validateAddCardForm.enableValidation();
validateEditProfileForm.enableValidation();
validateUpdateAvatarForm.enableValidation();