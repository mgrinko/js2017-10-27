'use strict';

class PhonesCatalogue {
  constructor({element, phones}) {
    this._element = element;
    this._phones = phones;
    this._sortBy = null;
    this._responseQuery = null;

    this._searchField = document.querySelector('[data-component="search"]');
    this._sorterMenu = document.querySelector('[data-component="sorter"]  select');

    this._searchListener();
    this._sorterListener();

    this._render();
    this._sorting(this._sorterMenu.value);
  }

  _searchListener() {
    this._searchField.addEventListener('input', (e) => {this._query(e);});
  }

  _sorterListener() {
    this._sorterMenu.addEventListener('click', (e) => {this._sorting(e.target.value);});
  }

  _query({target: {value}}) {
    const query = new RegExp(value.toUpperCase(), 'gim');

    this._responseQuery = this._phones.filter(({name}) =>
        name.toUpperCase().match(query),
    );

    this._render(this._responseQuery);
  }

  _sorting(value) {
    const phones = this._responseQuery ? this._responseQuery : this._phones;
    let sortedPhones;

    if (value !== this._sortBy) {
      this._sortBy = value;

      sortedPhones = phones.sort((a, b) =>
          a[this._sortBy] < b[this._sortBy] ? -1 : 1,
      );
    }

    this._render(sortedPhones);
  }

  _render(phones = this._responseQuery || this._phones) {
    let listHTML = '';

    phones.forEach((phone) => {
      listHTML += `
        <li class="thumbnail">
          <a href="#!/phones/${ phone.id }" class="thumb">
            <img alt="${ phone.name }" src="${ phone.imageUrl }">
          </a>
          <a href="#!/phones/${ phone.id }">${ phone.name }</a>
          <p>${ phone.snippet }</p>
          <p>${ phone.age }</p>
        </li>
      `;
    });

    this._element.innerHTML = `
      <ul class="phones">
        ${ listHTML }
      </ul>
    `;
  }
}