// const API_URL = 'http://localhost:3000';
const API_URL = 'https://mgrinko.github.io/js2017-10-27';

const HttpService = {
  get(url) {
    return fetch(API_URL + url)
      .then(response => response.json());
  }
};

export default HttpService;