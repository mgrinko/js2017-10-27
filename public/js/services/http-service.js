const HttpService = {
  get(url) {

    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);

      xhr.send();
      console.log('request was sent');

      xhr.onload = function() {
        if (this.status == 200) {
          let data = JSON.parse(xhr.responseText);
          resolve(data);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };


    });

  }
};

export default HttpService;