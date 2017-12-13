class Search {
  constructor({ element }) {
    this._element = element;

    this._render();
  }

  _render() {
    this._element.innerHTML = `
      <p>
        Search:
        <input type="text" value="">
      </p>
    `;

    this._searchBar = this._element.querySelector('input');
    this._searchBar.onkeyup = (event) => {
      this._handeKeyStroke(event);
    };
  }
  
  _handeKeyStroke() {
    page.catalogue.changeQuery(event.target.value);
  }
}