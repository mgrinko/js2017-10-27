'use strict';

class PhonesCatalogue {
  constructor({ element, phones }) {
    this._element = element;
    this._phones = phones;

    this._query = '';
    this._sortOrder = 'age'

    this._render();
  }

  _sortByAge(a, b) {
    return a.age - b.age;
  }

  _sortByName(a, b) {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  }

  _render() {
    let visiblePhones = this._phones.filter(phone => {
      return phone.name.toLowerCase().includes(this._query);
    })

    let sortFunction;
    switch (this._sortOrder) {
      case 'age':
        sortFunction = this._sortByAge;
        break;
      case 'name':
        sortFunction = this._sortByName;
        break;
      default:
        sortFunction = this._sortByAge;
        break;
    }

    visiblePhones.sort(sortFunction);

    let listHTML = '';
    visiblePhones.forEach((phone) => {
      listHTML += `
        <li class="thumbnail">
          <a href="#!/phones/${ phone.id}" class="thumb">
            <img alt="${ phone.name}" src="${phone.imageUrl}">
          </a>
          <a href="#!/phones/${ phone.id}">${phone.name}</a>
          <p>${ phone.snippet}</p>
        </li>
      `;
    });

    this._element.innerHTML = `
      <ul class="phones">
        ${ listHTML}
      </ul>
    `;
  }

  changeQuery(query) {
    this._query = query;
    this._render();
  }

  changeSortOrder(value) {
    this._sortOrder = value;
    this._render();
  }
}