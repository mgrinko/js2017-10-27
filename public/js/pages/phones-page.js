'use strict';

import Search from '../components/search.js';
import Sorter from '../components/sorter.js';
import PhonesCatalogue from '../components/phones-catalogue.js';
import PhoneViewer from '../components/phone-viewer.js';
import PhoneService from '../services/phones-service.js';


export default class PhonesPage {
    _initComponents() {
        this._search = new Search({
            element: this._element.querySelector('[data-component="search"]'),
        });

        this._sorter = new Sorter({
            element: this._element.querySelector('[data-component="sorter"]'),
            options: {
                "name": "Alphabetical",
                "age": "Newest"
            },
        });

        this._catalogue = new PhonesCatalogue({
            element: this._element.querySelector('[data-component="phones-catalogue"]'),
        });

        PhoneService.getAllFiltered()
            .then(
                phones => this._catalogue.setPhones( phones ),
                error => console.log(error)
            );

        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]'),
        });
    }


    constructor({ element }) {
        this._element = element;

        this._currentQuery = '';
        this._currentOrder = null;

        this._initComponents();

        this._catalogue.on('phones-catalogue.phone-selected', (event) => {
            let phoneId = event.detail;

            PhoneService.get(phoneId)
                .then(
                    phone => {
                        this._catalogue.hide();
                        this._viewer.show();
                        this._viewer.setPhone(phone);
                    },
                    error => console.log(error)
                );
        });

        this._search.on('search.change', (event) => {
            this._currentQuery = event.detail;

            PhoneService.getAllFiltered({
                query: this._currentQuery,
                order: this._currentOrder,
            })
                .then(
                    phones => this._catalogue.setPhones( phones ),
                    error => console.log(error)
                );
        });

        this._sorter.on('sorter.change', (event) => {
            this._currentOrder = event.detail;

            PhoneService.getAllFiltered({
                query: this._currentQuery,
                order: this._currentOrder,
            })
                .then(
                    phones => this._catalogue.setPhones( phones ),
                    error => console.log(error)
                );
        });
    }
}