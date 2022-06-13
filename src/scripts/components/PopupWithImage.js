import { Popup } from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(selectopPopup) {
    super(selectopPopup);
    this._popupImage = this._domElementPopup.querySelector(".popup__img");
    this._popupTitle = this._domElementPopup.querySelector(".popup__name");
  }
  open(name, link) {
    this._popupImage.src = name;
    this._popupImage.src = link;
    this._popupTitle.textContent = name;
    super.open();
  }
}
export { PopupWithImage };
