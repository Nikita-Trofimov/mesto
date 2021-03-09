export default class Popup {
  
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
  }

  _handleEscClose(evt) {
    if (evt.key === ESCKEY) {
      closePopup(document.querySelector('.popup_opened'));
    }
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popupSelector.querySelector('.popup__close-button')
    .addEventListener('click', this.close);
  }
}