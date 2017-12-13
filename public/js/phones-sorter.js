class Sorter {
  constructor({ element, options }) {
    this._element = element;
    this._options = options;

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <p>
        Sort by:
        <select></select>
      </p>
    `;
    this._selection = this._element.querySelector('select');

    this._options.forEach((pair, index) => {
      this._selection.innerHTML += `<option value="${pair[0]}">${pair[1]}</option>`
    });

    this._selection.onchange = (event) => {
      this._handeChange(event);
    };
  }

  _handeChange() {
    page.catalogue.changeSortOrder(event.target.value);
  }
}