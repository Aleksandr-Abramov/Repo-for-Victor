export { PopupWithForm };
import { Popup } from "./Popup.js";
import { validateImageForm } from "../pages/index.js";

class PopupWithForm extends Popup {
    constructor(selectopPopup, handleFormSubmit) {
      super(selectopPopup);
      this._handleFormSubmit = handleFormSubmit
      this._form = this._domElementPopup.querySelector(".popup__form-image");
      this._inputList = this._form.querySelectorAll(".popup__input");

    }
    _getInputValues() {
      this._fornValues = {}
      this._inputList.forEach(input => {
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
      validateImageForm._disableButton(this._form.btnSubmith, {
        inactiveButtonClass: "popup__button_disabled",
      });
      this._form.reset();
      super.close();
    }
  }
