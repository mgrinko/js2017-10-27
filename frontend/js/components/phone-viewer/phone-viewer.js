'use strict';

import Component from '../../component.js';
import compiledTemplate from './phone-viewer.hbs';

export default class PhoneViewer extends Component {
  constructor({ element }) {
    super(element);
  }

  setPhone(phone) {
    this._phone = phone;

    this._render();
  }

  _render() {
    this._element.innerHTML = compiledTemplate({
      phone: this._phone
    });
  }
}