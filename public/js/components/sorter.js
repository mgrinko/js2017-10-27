'use strict';

let template = document.querySelector('#sorter-template').innerHTML;
let compiledTemplate = _.template(template);

import Component from '../component.js';

export default class Sorter extends Component {
  constructor({ element, options }) {
    super(element);

    this._options = options;

    this._render();

    this._select = this._element.querySelector('[data-element="sorting"]');

    this._select.addEventListener('change', (event) => {
      this.trigger('sorter.change', this._select.value);
    });
  }

  _render() {
    this._element.innerHTML = compiledTemplate({
      list: this._options,
    });
  }
}