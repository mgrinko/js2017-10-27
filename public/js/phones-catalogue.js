'use strict';

class PhonesCatalogue {
  constructor({ element, phones, elementPhone }) {
    this._element = element;
    this._phones = phones;
    this._elementPhone = elementPhone;
    this.arr_sort_phones
    this.inputfield = this._elementPhone.querySelector('input')
    this.inputfield.addEventListener('input', this._debonseSearch(this._search, 1000))

    this._render(this._phones);
    
  }

  _render(a) {
    let listHTML = '';

    a.forEach((phone) => {
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

   _search() {
    let res = this.value.toLowerCase()
    this.arr_sort_phones = phonesFromServer.filter(function(elem) {
        for (let key in elem) {
          if (typeof elem[key] == "string") {
            return (elem[key].toLowerCase().indexOf(res) !== -1)
          }
        }
      })
    return console.log(this.arr_sort_phones)
  
  }




  _debonseSearch(f, ms = 500){
    let timer = 0;
    return function () {
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = 0;
        f.apply(this, arguments)
      }, ms)
    }
  }
}