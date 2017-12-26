'use strict';

import HttpService from './http-service.js';


const PhoneService = {
  getAllFiltered(successCallback, { query = '', order = 'name' } = {}) {
    HttpService.get(
      `/data/phones/phones.json`
    ).then(
      (phones) => {
        let filteredPhones = this._getFilteredPhones(phones, query);
        let sortedPhones = this._getSortedPhones(filteredPhones, order);

        successCallback(sortedPhones);
      },
      (error) => {
        console.log(error);
      });
  },

  get(phoneId, successCallback) {
    HttpService.get(
      `/data/phones/${ phoneId }.json`
    ).then(
      successCallback,
      (error) => {
        console.log(error);
      });
  },

  _getFilteredPhones(phones, query) {
    let normalizedQuery = query.toLowerCase();

    return phones.filter((phone) => {
      return phone.name.toLowerCase().includes(normalizedQuery)
    });
  },

  _getSortedPhones(phones, order) {
    switch(order) {
      case 'age':
        return phones.sort(this._sortByAge);

      case 'name':
      default:
        return phones.sort(this._sortByName);
    }
  },

  _sortByName(a, b) {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  },

  _sortByAge(a, b) {
    return a.age - b.age;
  }
};

export default PhoneService;