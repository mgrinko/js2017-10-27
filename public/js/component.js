'use strict';

export default class Component {
  constructor(element) {
    this._element = element;
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