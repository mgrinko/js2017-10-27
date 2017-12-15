'use strict';

class PhonesSearch {
  constructor({element}) {
    this._element = element;
    this._inputField = this._element.querySelector('input');

    this._inputHandler();
  }

  _inputHandler() {
    if (!this._inputField) return;

    this._inputField.addEventListener('input', () => {
      this._initSearch();
    });
  }

  _initSearch() {
    let searchEvent = new Event('search', {bubbles: true, cancelable: true});

    searchEvent.searchString = this._inputField.value;
    this._element.dispatchEvent(searchEvent);
  }
}