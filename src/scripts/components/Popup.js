import {ESCKEY} from '../utils/constants.js';

export default class Popup {
  
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
  }

  _handleEscClose(evt) {
    if (evt.key === ESCKEY) {
      this.close();
    }
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
  }

  setEventListeners() {
    this._popupSelector.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    });
  }
}