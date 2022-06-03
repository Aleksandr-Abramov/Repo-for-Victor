export {Section};

class Section {
  constructor({items, renderer}, containerSelector) {
    this._initialArray = items;
    this._getDomElement = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderer() {
    this._initialArray.forEach(arrayElement => {
      this._getDomElement(arrayElement);
    });
  }

  addItem(card) {
    this._container.append(card);
  }

  addItemPrepend(card) {
    this._container.prepend(card);
  }
}
