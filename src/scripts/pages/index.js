import '../../pages/index.css';

import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { UserInfo} from "../components/UserInfo.js";
import { PopupWithImage} from "../components/PopupWithImage.js";
import { PopupWithForm} from "../components/PopupWithForm.js";
export { validateImageForm };

import {
  initialCards,
  valndateConfig,
  buttonOpenAddImagePopup,
  buttonOpenProfilePopup,
  infoUserObj,
} from "../utils/constants.js";


//форма с кортинкой
const validateImageForm = new FormValidator(
  valndateConfig,
  "popup__form-image"
);
validateImageForm.enableValidation();
//форма профайла
const validateProfileForm = new FormValidator(
  valndateConfig,
  "popup__form-profile"
);
validateProfileForm.enableValidation();


//содание и рендер карточик
const cardList = new Section(
  {
    items: initialCards,
    renderer: (arrayElement) => {
      const newCard = new Card(arrayElement, "#gallery__item", (name, link)=>{popupImage.open(name, link)});
      const compliteCard = newCard.generateCard();
      cardList.addItem(compliteCard);
    },

  },
  ".gallery"
);
cardList.renderer();
//открытие картинок по клику
const popupImage = new PopupWithImage(".popup_bg");
popupImage.setEventListeners();

//для ProfilePopupEdit
const formProfile = document.querySelector(".popup__form-profile");
const profilePopup = new UserInfo(".popup_prifile", infoUserObj);
profilePopup.setEventListeners();

buttonOpenProfilePopup.addEventListener("click", () => {
  profilePopup.getUserInfo();
});
formProfile.addEventListener("submit", (event) => {
  profilePopup.setUserInfo(event);
});

const popupForm = new PopupWithForm(".popup_add-image", (formData)=> {
  const newCard = new Card(formData, "#gallery__item", (name, link)=> {popupImage.open(name, link)});
  const compliteCard = newCard.generateCard();
  cardList.addItemPrepend(compliteCard);
});
popupForm.setEventListeners();
popupForm._getInputValues();

buttonOpenAddImagePopup.addEventListener("click", ()=> {popupForm.open()});

