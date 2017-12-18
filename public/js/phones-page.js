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

    this._getPhones()
      .then(this._catalogue.setPhones);
  }


  constructor({ element }) {
    this._element = element;

    this._currentQuery = '';
    this._currentOrder;

    this._initComponents();



    this._search.on('search.change', (event) => {
      this._currentQuery = event.detail;

      this._getPhones({
        query: this._currentQuery,
        order: this._currentOrder,
      })
        .then(this._catalogue.setPhones);
    });

    this._sorter.on('sorter.change', (event) => {
      this._currentOrder = event.detail;

      this._getPhones({
        query: this._currentQuery,
        order: this._currentOrder,
      })
        .then(this._catalogue.setPhones);
    });
  }

  _getPhones({ query = '', order = 'name' } = {}) {

    return new Promise(function(resolve, reject) {

      let xhr = new XMLHttpRequest();
      let params = 'q=' + query + '&order=' + order;
      xhr.open('GET', 'phones?' + params, true);
  
      xhr.onload = function() {
        if (this.status == 200) {
          let result = JSON.parse(this.responseText);
          resolve(result);
        } else {
          let error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
  
      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
  
      xhr.send();
    });
  }

}