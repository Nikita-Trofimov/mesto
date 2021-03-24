import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
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