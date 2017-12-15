'use strict';

class PhonesSearch {
  constructor({element, phonesList}) {
    this._element = element;
    this._render();
    this._phonesList = phonesList;
    let phoneItems = phonesList.querySelectorAll('ul li');

    this._input = this._element.querySelector('input');
    let inputTimer = null;
    this._input.oninput = function(event){
      if (inputTimer !== null){
        clearTimeout(inputTimer);
      }

      inputTimer = setTimeout(function(){
        makeSearch.call(this);
      }, 100);

      function makeSearch(){
        let inputValue = event.target.value;
        phoneItems.forEach(function(phone){
        let phoneText = phone.textContent;
        if(phoneText.indexOf(inputValue) === -1){
          phone.classList.add('hidden');
          return;
        }
        phone.classList.remove('hidden');
      })
      }
    }

  }

  _render(){
    let search = `
      <div class="search-module">
        <p>Search:</p>
        <input type="text" name="" value="">
      </div>
    `;
    this._element.innerHTML += search;
  }
}
