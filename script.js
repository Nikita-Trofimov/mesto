let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupFormElement = popup.querySelector('.popup__container');
let popupCloseButton = popup.querySelector('.popup__close-button');
let profileName = profile.querySelector('.profile__title');
let profileProf = profile.querySelector('.profile__subtitle');
let nameInput = popupFormElement.querySelector('.popup__input_type_name'); 
let profInput = popupFormElement.querySelector('.popup__input_type_profession');

function popupOpen() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (event) {
  event.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileProf.textContent = profInput.value;
  popupClose();
}

profileEditButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popupFormElement.addEventListener('submit', handleFormSubmit); 