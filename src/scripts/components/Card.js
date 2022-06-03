class Card {
  constructor(data, selector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    //классовые переменные
    this._card = this._createDomElement();
    this._cardImage = this._card.querySelector(".gallery__img");
    this._cardText = this._card.querySelector(".gallery__text");
    this._likeButton = this._card.querySelector(".gallery__like");
    this._trashButton = this._card.querySelector(".gallery__trash");
  }

  //создает дом элемент в памяти
  _createDomElement() {
    const gallaryTemplate = document
      .querySelector(this._selector)
      .content.querySelector(".gallery__item")
      .cloneNode(true);
    return gallaryTemplate;
  }

  //наполняет содержимым дом элемент
  _addContent() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardText.textContent = this._name;
    return this._card;
  }

  //ставит лайк
  _setLike() {
    this._likeButton.classList.toggle("gallery__like_active");
  }

  //удаляет элемент
  _deleteItem() {
    this._card.remove();
  }

  //устанавливает слушатели на дом элемент
  _setEventListeners() {
    this._card = this._addContent();
    this._likeButton.addEventListener("click", () => this._setLike());
    this._trashButton.addEventListener("click", () => this._deleteItem());
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
    return this._card;
  }

  generateCard() {
    return this._setEventListeners();
  }
}

export { Card };
