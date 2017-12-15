'use strict';

import Component from './component.js';

export default class Search extends Component {
  constructor({ element }) {
    super(element);

    this._render();

    this._fieldElement = this._element.querySelector('[data-element="field"]');

    this._fieldElement.addEventListener('input', () => {
      this.trigger('search.change', this._fieldElement.value);
    })
  }

  _render() {
    this._element.innerHTML = `
      <p>
          Search:
          <input data-element="field">
      </p>
    `;
  }
}