'use strict';

let template = document.querySelector('#phones-catalogue-template').innerHTML;
let compiledTemplate = _.template(template);

export default class PhonesCatalogue {
  constructor({ element, phones }) {
    this._element = element;

    this._render();

    this._phonesList = this._element.querySelector('[data-element="phones-list"]');

    this.setPhones = this.setPhones.bind(this);
  }

  setPhones(phones) {
    this._phones = phones;

    this._renderList();
  }

  _render() {
    this._element.innerHTML = '';
  }

  _renderList() {
    this._element.innerHTML = compiledTemplate({
      phones: this._phones,
    });
  }
}











