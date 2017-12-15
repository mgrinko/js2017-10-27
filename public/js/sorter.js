'use strict';

import Component from './component.js';

export default class Sorter extends Component {
  constructor({ element, list: optionsList }) {
    super(element);

    this._list = optionsList;

    this._render();

    this._select = this._element.querySelector('[data-element="sorting"]');

    this._select.addEventListener('change', (event) => {
      this.trigger('sorter.change', this._select.value);
    });
  }

  _render() {
    let listHTML = '';

    for (let option in this._list) {
      listHTML += `
        <option value="${option}">${this._list[option]}</option>
      `;
    }

    this._element.innerHTML = `
      <p>
        Sort by:
        <select data-element="sorting">
          ${listHTML}
        </select>
      </p>
    `;
  }
}