const API_URL = 'http://localhost:3000';
// const API_URL = 'https://mgrinko.github.io/js2017-10-27';

const HttpService = {
  get(url) {

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', API_URL + url, true);

      xhr.send();

      xhr.onload = () => {

        if (xhr.status !== 200) {
          reject(`Error ${xhr.status} ${xhr.statusText}`);

          return;
        }

        let data = JSON.parse(xhr.responseText);

        resolve(data);
      };


    });


  }
};

export default HttpService;