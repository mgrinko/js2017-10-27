const HttpService = {
  get(url) {

    return new Promise(function(resolve, reject) {

      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);

      xhr.send();
      console.log('request was sent');

      xhr.onload = () => {
        let data = JSON.parse(xhr.responseText);

        resolve(data);
      };
    });

  },
};

export default HttpService;