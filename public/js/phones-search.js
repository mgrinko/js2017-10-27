class Search {
  constructor({ element }) {
    this._element = element;

    this._searchBar = document.createElement('input');
    this._searchBar.type = 'text';
    this._searchBar.value = '';

    this._searchBar.onkeyup = (event) => {
      page.catalogue.changeQuery(event.target.value);
    };

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <p>
        Search:
      </p>
    `;
    this._element.querySelector('p').append(this._searchBar);
  }
}