'use strict';

class PhonesCatalogue {
  constructor({ element, phones }) {
    this._element = element;
    this._phones = phones;

    this._render();
  }

  _render() {
    let listHTML = '';

    this._phones.forEach((phone) => {
      listHTML += `
        <li class="thumbnail">
          <a href="#!/phones/${ phone.id }" class="thumb">
            <img alt="${ phone.name }" src="${ phone.imageUrl }">
          </a>
          <a href="#!/phones/${ phone.id }">${ phone.name }</a>
          <p>${ phone.snippet }</p>
        </li>
      `;
    });

    this._element.innerHTML = `
      <ul class="phones">
        ${ listHTML }
      </ul>
    `;
  }

  _search(searchString) {

    let searchRegExp = new RegExp(`${ searchString }`, 'i');

    let phoneList = this._element.querySelectorAll('li');

    for(let item of phoneList) {
      if(!searchRegExp.test(item.textContent)) {
        item.hidden = true;     // не срабатывает, т.к. перекрывается css-классом .thumbnail,
                                // пришлось display: block; ставить
        item.style.display = 'none';
      } else {
        item.hidden = false;
        item.style.display = 'block';
      }
    }
  }
}