export { FormValidator };

class FormValidator {
  constructor(date, formSelector) {
    this._inputSelector = date.inputSelector;
    this._submitButtonSelector = date.submitButtonSelector;
    this._inactiveButtonClass = date.inactiveButtonClass;
    this._inputErrorClass = date.inputErrorClass;
    this._errorClass = date.errorClass;
    //классовые переменные
    this._formElement = document.querySelector(`.${formSelector}`);
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }


  enableValidation() {
    this._formElement.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    this._setEventListeners();
  }

  _setEventListeners() {
    this._toggleButton();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButton();
      });
    });
  }
  //проверка валидации форм
  _isValid(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //показыть сообщение, ошибка
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  }

  //скрыть сообщение, ошибка
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  //проверить все поля
  _hasInvalidInput(inputList) {
    return inputList.some(function(inputElement){
      return !inputElement.validity.valid;
    })
  }

  //закрыть/открыть кнопку
  _toggleButton() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  }

  _disableButton() {
    this._buttonElement.setAttribute("disabled", true);
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  _enableButton() {
    this._buttonElement.removeAttribute("disabled");
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  }

}
