'use strict';

class Filter {
  constructor({ element }) {
    this._self = this;
    this._element = element;
    this._elementInput = this._element.querySelector('input');
		
		this._elementInput.addEventListener("keyup" , this._applyFilter);
  }

  _applyFilter(event) {
		let pattern = event.target.value.toLowerCase();
		let phonesList = document.querySelectorAll('[data-component="phones-catalogue"] li');
		
		phonesList.forEach((phone) => {
			let title = phone.querySelectorAll('a')[1].innerHTML.toLowerCase();
			if (pattern === '' || ~title.indexOf(pattern)) {
				phone.style.display = '';
			} else {
				phone.style.display = 'none';
			}
		});
  }
}
