// const API_URL = 'http://localhost:3000';
const API_URL = 'https://mgrinko.github.io/js2017-10-27';

const HttpService = {
  get(url, successCallback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', API_URL + url, true);

    xhr.send();
    console.log('request was sent');

    xhr.onload = () => {
      let data = JSON.parse(xhr.responseText);

      successCallback(data);
    };
  }
};

export default HttpService;