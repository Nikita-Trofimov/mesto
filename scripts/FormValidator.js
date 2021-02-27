export class FormValidator {
  constructor (configValidation, fromValidation) {
    this.configValidation = configValidation;
    this.fromValidation = fromValidation;
  }
  _showInputError = (formElement, inputElement, errorMessage, config) => {
    this._errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.add(config.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(config.errorClass);
  };

  _hideInputError = (formElement, inputElement, config) => {
    this._errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.remove(config.inputErrorClass);
    this._errorElement.classList.remove(config.errorClass);
    this._errorElement.textContent = '';
  };

  _checkInputValidity(formElement, inputElement, config) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      this._hideInputError(formElement, inputElement, config);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some( (inputElemetn) => {
      return !inputElemetn.validity.valid;
    });
  }

  _disableButton(button, config) {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled');
  }

  _toggleButtonState(inputList, buttonElement, config) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement, config);
    } else { 
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', 'disabled');
    }
  }
  
  _setEventListeners(formElement, config){
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
    this._toggleButtonState(this._inputList, this._buttonElement, config);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, config);
        this._toggleButtonState(this._inputList, this._buttonElement, config);
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners(this.fromValidation, this.configValidation);
      };
}