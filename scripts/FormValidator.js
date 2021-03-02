export class FormValidator {
  constructor (configValidation, formValidation) {
    this._configValidation = configValidation;
    this._formValidation = formValidation;
  }
  _showInputError = (inputElement, errorMessage) => {
    this._errorElement = this._formValidation.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.add(this._configValidation.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._configValidation.errorClass);
  };

  _hideInputError = (inputElement) => {
    this._errorElement = this._formValidation.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.remove(this._configValidation.inputErrorClass);
    this._errorElement.classList.remove(this._configValidation.errorClass);
    this._errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some( (inputElemetn) => {
      return !inputElemetn.validity.valid;
    });
  }

  _disableButton() {
    this._buttonElement.classList.add(this._configValidation.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton(this._buttonElement, this._configValidation);
    } else { 
      this._buttonElement.classList.remove(this._configValidation.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', 'disabled');
    }
  }
 
  _setEventListeners(){
    this._inputList = Array.from(this._formValidation.querySelectorAll(this._configValidation.inputSelector));
    this._buttonElement = this._formValidation.querySelector(this._configValidation.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
      };

  resetValidation() {
      this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
      this._toggleButtonState();
  }
}