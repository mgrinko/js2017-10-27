'use strict';

let template = document.querySelector('#phones-catalogue-template').innerHTML;
let compiledTemplate = _.template(template);

console.log(compiledTemplate);

export default class PhonesCatalogue {
  constructor({ element, phones }) {
    this._element = element;

    this._render();

    this._phonesList = this._element.querySelector('[data-element="phones-list"]');
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











