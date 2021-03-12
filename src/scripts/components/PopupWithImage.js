import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._link = popupSelector.querySelector('.popup-illustration__img');
    this._title = popupSelector.querySelector('.popup-illustration__title');;

  }

  open(name, link) {
    super.open();
    this._title.textContent = name;
    this._link.src = link;
  }
}