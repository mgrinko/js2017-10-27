'use strict';

class PhonesCatalogue 
{
  constructor({ element }) {
    this._element = element;
    this.template = document.getElementById('phones-catalogue-template').innerHTML;
    this.compiledTemplate = _.template( this.template );

    this._element.innerHTML = '';

    this._phonesList = this.compiledTemplate( phonesFromServer );
  }

  // set phone list
  setPhones(phones) {
    this._phones = phones;

    this._element.innerHTML = this.compiledTemplate( this._phones );
  }
}