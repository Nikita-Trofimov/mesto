import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
  constructor (popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.popup__form')
    this._inputValues = this._popupSelector.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const inputs = {};
    this._inputValues.forEach(element => {
      inputs[element.name] = element.value;
    });
    return inputs;
  }
  
  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => this._handleFormSubmit(evt, this._getInputValues()));
  }
}