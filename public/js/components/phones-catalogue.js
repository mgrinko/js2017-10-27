'use strict';

import Component from '../component.js';

let template = document.querySelector('#phones-catalogue-template').innerHTML;
let compiledTemplate = _.template(template);


export default class PhonesCatalogue extends Component {
  constructor({ element, phones }) {
    super(element);

    this._element.addEventListener('click', (event) => {
      this._onPhoneClick(event);
    });

    this._render();

    this._phonesList = this._element.querySelector('[data-element="phones-list"]');
  }

  setPhones(phones) {
    this._phones = phones;

    this._renderList();
  }

  _onPhoneClick(event) {
    let phoneLink = event.target.closest('[data-element="phone-link"]');

    if (!phoneLink) {
      return;
    }

    let phoneElement = phoneLink.closest('[data-element="phone"]');
    let phoneId = phoneElement.dataset.phoneId;

    this.trigger('phones-catalogue.phone-selected', phoneId);
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











