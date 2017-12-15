`use strict`;

class PhonesCatalogue {
    constructor ( {element, phones} ) {
        this._element = element;
        this._phones = phones;

        this._render();
    }

    _render() {
        let listHTML = '';

        this._phones.forEach(
            (phone) => {
                listHTML += `
                    <li class="thumbnail">
                    <a href="#!/phones/${phone.id}" class="thumb">
                        <img alt="${phone.name}" src="${phone.imageUrl}">
                    </a>
                    <a href="#!/phones/${phone.id}">${phone.name}</a>
                    <p>${phone.snippet}</p>
                    </li>
                `;
            }
        );
        
        this._element.innerHTML = `
        <ul class="phones">${listHTML}</ul>
        `;
    }
}