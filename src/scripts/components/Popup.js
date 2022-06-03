export { Popup };

class Popup {
  constructor(selectopPopup) {
    this._domElementPopup = document.querySelector(selectopPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener("keydown", this._handleEscClose);
    this._domElementPopup.classList.add("popup_opened");
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._domElementPopup.classList.remove("popup_opened");
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._domElementPopup.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("popup")) {
        this.close();
      }

      if (event.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  }
}
