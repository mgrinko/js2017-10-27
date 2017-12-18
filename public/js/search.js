'use strict';

class Search extends Component 
{
  constructor({ element }) {
    super(element);

    this._render();

    this._fieldElement = document.getElementById('field');

    this._fieldElement.addEventListener('input', () => {
      this.trigger('search.change', this._fieldElement.value);
    })
  }

  _render() {
    this._element.innerHTML = `
      <p>
          Search:
          <input id="field">
      </p>
    `;
  }
}