const HttpService = {
  get(url) {
    return new Promise(function(resolve, reject){

      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);

      xhr.send();

      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          let error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onerror = () => {
        reject(new Error('Network Error'));
      };

     
    });
  }
};

export default HttpService;