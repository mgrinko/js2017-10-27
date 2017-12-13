class Sorter {
  constructor({ element, options }) {
    this._element = element;

    this._selection = document.createElement('select');

    options.forEach((pair, index) => {
      let option = document.createElement('option');
      option.value = pair[0];
      option.textContent = pair[1];
      this._selection.append(option);
    })

    this._selection.onchange = (event) => {
      page.catalogue.changeSortOrder(event.target.value);
    };

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <p>
        Sort by:
      </p>
    `;
    this._element.querySelector('p').append(this._selection);
  }
}