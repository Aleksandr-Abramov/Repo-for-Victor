export { UserInfo };
import { Popup } from "./Popup.js";
import { validateImageForm } from "../pages/index.js";

class UserInfo extends Popup {
  constructor(selectopPopup, profileInfo) {
    super(selectopPopup);
    this._profileForm = this._domElementPopup.querySelector(".popup__form-profile")
    this._name = document.querySelector(profileInfo.profileTitle);
    this.jobInfo = document.querySelector(profileInfo.profileSubtitle);
  }
  getUserInfo() {
    this._profileForm
    .querySelector(".popup__input_name_js")
    .value = this._name.textContent;
    this._profileForm
    .querySelector(".popup__input_profession_js")
    .value = this.jobInfo.textContent;
    super.open();
  }
  setUserInfo(event) {
    event.preventDefault();
    this._name.textContent = this._profileForm
    .querySelector(".popup__input_name_js")
    .value;
    this.jobInfo.textContent = this._profileForm
    .querySelector(".popup__input_profession_js")
    .value;
    validateImageForm._disableButton(this._profileForm.btnSubmith, {
      inactiveButtonClass: "popup__button_disabled",
    });
    super.close();
  }
}
