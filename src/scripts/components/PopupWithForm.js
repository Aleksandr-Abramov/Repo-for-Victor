import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(selectopPopup, handleFormSubmit, disableButton) {
    super(selectopPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._disableButton = disableButton;
    this._form = this._domElementPopup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }
  _getInputValues() {
    this._fornValues = {};
    this._inputList.forEach((input) => {
      this._fornValues[input.name] = input.value;
    });

    return this._fornValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
  close() {
    this._form.reset();
    super.close();

  }
}

export { PopupWithForm };
