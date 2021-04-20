import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor(popupSelector, handleConfirmButton) {
    super(popupSelector);
    this._handleConfirmButton = handleConfirmButton;
    this._confirmForm = popupSelector.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners(this._confirmButton);
    this._confirmForm.addEventListener('submit', (evt) => {
      this._handleConfirmButton(evt, this._cardToRemove,  this._cardId);
    });
  }
  open(card, cardId){
    super.open();
    this._cardToRemove = card;
    this._cardId = cardId;
  }
}