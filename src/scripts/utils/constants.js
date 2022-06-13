export {
  initialCards,
  valndateConfig,
  buttonOpenAddImagePopup,
  buttonOpenProfilePopup,
  infoUserObj,
  formProfileInputName,
  formProfileInputSubTitle,
  buttonAvatarOpen,
  deliteForm,
};

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
//запуск валидации
const valndateConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
/**
 * импуты формы профайлы
 */
const formProfileInputName = document.querySelector(".popup__input_name_js");
const formProfileInputSubTitle = document.querySelector(".popup__input_profession_js");

//открытие, добовление карточки
const buttonOpenAddImagePopup = document.querySelector(".profile__btn");

//открытие, добовление информации о пользователе
const buttonOpenProfilePopup = document.querySelector(".profile__edit-btn");

//стартовые данные для профайла
const infoUserObj = {
  profileTitle: ".profile__title",
  profileSubtitle: ".profile__sub-title",
};

const buttonAvatarOpen = document.querySelector(".profile__image-container");
const deliteForm = document
.querySelector(".popup_delete")
.querySelector(".popup__form");
// console.log(buttonDeletepoput)
