import "./index.css";

import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { Popup } from "../scripts/components/Popup.js";
import { PopupWhiteDelete } from "../scripts/components/PopupWhiteDelete.js";
export { validateImageForm };

import {
  initialCards,
  valndateConfig,
  buttonOpenAddImagePopup,
  buttonOpenProfilePopup,
  infoUserObj,
  formProfileInputName,
  formProfileInputSubTitle,
  buttonAvatarOpen,
  deliteForm,
} from "../scripts/utils/constants.js";


/**
 * форма с кортинкой
 */
const validateImageForm = new FormValidator(
  valndateConfig,
  "popup__form-image"
);
validateImageForm.enableValidation();
/**
 * форма профайла
 */
const validateProfileForm = new FormValidator(
  valndateConfig,
  "popup__form-profile"
);
validateProfileForm.enableValidation();

const validateAvatarForm = new FormValidator(
  valndateConfig,
  "avatar-popup"
);
validateAvatarForm.enableValidation();
/**
 * добовление открытия карточки
 */
const popupImage = new PopupWithImage(".popup_bg");
function openCard(name, link) {
  popupImage.setEventListeners();
  return popupImage.open(name, link);
}


function createCard(arrayElement) {
  const card = new Card(arrayElement, "#gallery__item", openCard);
  return card.generateCard();
}

/**
 * создание секции, добавление карточек
 */
const section = new Section(
  initialCards,
  (arrayElement) => {
    section.addItem(createCard(arrayElement));
  },
  ".gallery"
);
section.renderer();


/**
 * открытие и создание карточки
 */
function addImage(dataInputs) {
  section.addItemPrepend(createCard(dataInputs));
}

const imagePopup = new PopupWithForm(".popup_add-image", addImage);
imagePopup.setEventListeners();

buttonOpenAddImagePopup.addEventListener("click", () => {
  validateImageForm.disableButton();
  imagePopup.open();
});

/**
 * изменение данных профайла
 */
 const userInfo = new UserInfo(infoUserObj);
 function changeProfile(dataInputs) {
   userInfo.setUserInfo(dataInputs);
 }
/**
 * открытие профайла
 */
const profilePopup = new PopupWithForm(".popup_prifile", changeProfile);
profilePopup.setEventListeners();

buttonOpenProfilePopup.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo();
  formProfileInputName.value = name;
  formProfileInputSubTitle.value = job;
  validateProfileForm.disableButton();
  profilePopup.open();
});

/**
 * создание попат для аватара, и открытие
 */
const avatarPopup = new Popup(".avatar-popup");
avatarPopup.setEventListeners();

buttonAvatarOpen.addEventListener("click", ()=>{
  validateAvatarForm.disableButton();
  avatarPopup.open();
});
/**
 * попап для удаления
 */
const deletePopup = new PopupWhiteDelete(".popup_delete");
deletePopup.setEventListeners();

function handleDelete() {
  deletePopup.setSubmitHandler()
}




