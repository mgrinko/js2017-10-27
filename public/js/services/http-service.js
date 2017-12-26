const HttpService = {
  get(url) {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);

      xhr.onload = () => {
        if (xhr.status == 200) {
          let data = JSON.parse(xhr.responseText);
          resolve(data);
        } else {
          reject(Error(xhr.statusText));
        }
      };

      xhr.onerror = function() {
        reject(Error(xhr.statusText));
      };

      xhr.send();
    });
  } 
};

export default HttpService;
