'use strict';

import Component from './component.js';

let template = document.querySelector('#search-template').innerHTML;
let compiledTemplate = _.template(template);

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
    this._element.innerHTML = compiledTemplate();
  }
}