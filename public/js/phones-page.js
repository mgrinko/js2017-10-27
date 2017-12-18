'use strict';

import Search from './search.js';
import Sorter from './sorter.js';
import PhonesCatalogue from './phones-catalogue.js';

const sortingList = {
  "name": "Alphabetical",
  "age": "Newest"
};

export default class PhonesPage {
  _initComponents() {
    this._search = new Search({
      element: this._element.querySelector('[data-component="search"]'),
    });

    this._sorter = new Sorter({
      element: this._element.querySelector('[data-component="sorter"]'),
      list: sortingList,
    });

    this._catalogue = new PhonesCatalogue({
      element: this._element.querySelector('[data-component="phones-catalogue"]'),
    });

    this._catalogue.setPhones(this._getPhones());
  }


  constructor({ element }) {
    this._element = element;

    this._currentQuery = '';
    this._currentOrder;

    this._initComponents();



    this._search.on('search.change', (event) => {
      this._currentQuery = event.detail;

      let phones = this._getPhones({
        query: this._currentQuery,
        order: this._currentOrder,
      });

      this._catalogue.setPhones(phones);
    });

    this._sorter.on('sorter.change', (event) => {
      this._currentOrder = event.detail;

      let phones = this._getPhones({
        query: this._currentQuery,
        order: this._currentOrder,
      });

      this._catalogue.setPhones(phones);
    });
  }

  _getPhones({ query = '', order = 'name' } = {}) {

    let result;

    let normalizedQuery = query.toLowerCase();

    let xhr = new XMLHttpRequest();
    
    let url = 'phones?q=' + normalizedQuery + '&order=' + order;

    xhr.open('GET', url, false);

    xhr.onreadystatechange = function () {

      if (xhr.readyState != 4) return;

      if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        return;
      }

      // обработать результат
      result = JSON.parse(xhr.responseText);
    }

    xhr.send();

    return result;
  }

}