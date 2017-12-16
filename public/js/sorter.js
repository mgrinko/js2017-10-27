'use strict';

import Component from './component.js';

let template = document.querySelector('#sorter-template').innerHTML;
let compiledTemplate = _.template(template);

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
    this._element.innerHTML = compiledTemplate({
      list: this._list,
    });
  }
}