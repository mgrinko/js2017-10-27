'use strict';

class MyPromise {
  constructor(behaviourFunction) {
    this._status = 'pending';
    this._successCallbacks = [];
    this._errorCallbacks = [];

    this._resolve = this._resolve.bind(this);
    this._reject = this._reject.bind(this);

    behaviourFunction(this._resolve, this._reject);
  }

  then(successCallback, errorCallback) {
    if (this._status === 'fulfilled') {
      successCallback(this._result);

      return;
    }

    this._successCallbacks.push(successCallback);
    this._errorCallbacks.push(errorCallback);

    return new MyPromise((resolve, reject) => {
      this.then(
        (data) => resolve(data),
        (error) => reject(error)
      );
    });
  }

  _resolve(data) {
    if (this._status !== 'pending') {
      return;
    }

    this._result = data;
    this._status = 'fulfilled';

    this._successCallbacks.forEach((callback) => {
      callback(data);
    });
  }

  _reject(error) {
    if (this._status !== 'pending') {
      return;
    }

    this._result = error;
    this._status = 'rejected';

    this._errorCallbacks.forEach((callback) => {
      callback(error);
    });
  }
}



let documentClickPromise = new MyPromise((resolve, reject) => {
  document.onclick = () => {
    resolve(123);
  };
});

documentClickPromise
  .then((data) => {
    console.log('document click', data);
  });

documentClickPromise
  .then((data) => {
    console.log('qweqweqwe');
  });


let documentRightClickPromise = new MyPromise(
  (resolve, reject) => {

  }
);


documentClickPromise
  .then(() => documentRightClickPromise)
  .then(() => {
    console.log('123123');
  });