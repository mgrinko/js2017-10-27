const HttpService = {
  get(url, successCallback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.send();
    console.log('request was sent');

    xhr.onload = () => {
      let data = JSON.parse(xhr.responseText);

      successCallback(data);
    };
  }
};

export default HttpService;