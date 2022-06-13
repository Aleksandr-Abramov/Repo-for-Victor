import { Popup } from "./Popup.js";

class PopupWhiteDelete extends Popup {
  constructor(selectopPopup) {
    super(selectopPopup);
    console.log(this._domElementPopup)
  }

  setSubmitHandler() {
    this._submitHandler = this._domElementPopup;
  }
  setEventListeners() {

    this._popup.addEventListener('submit', () => this._submitHandler());
  }

}

export { PopupWhiteDelete };
