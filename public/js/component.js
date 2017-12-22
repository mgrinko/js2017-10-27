'use strict';

export default class Component {
  constructor(element) {
    this._element = element;
  }

  show() {
    this._element.classList.remove('js-hidden');
  }

  hide() {
    this._element.classList.add('js-hidden');
  }

  on(eventName, handler) {
    this._element.addEventListener(eventName, handler);
  }

  trigger(eventName, data) {
    let myEvent = new CustomEvent(eventName, {
      detail: data,
    });

    this._element.dispatchEvent(myEvent);
  }
}