let http = require('http');
let url = require('url');
let querystring = require('querystring');
let static = require('node-static');
let file = new static.Server('./public');
let fs = require('fs');

let phonesFromServer;

fs.readFile('./phones/phones.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  phonesFromServer = JSON.parse(data);
});

function accept(req, res) {

  let parsedUrl = url.parse(req.url, true, true);

  if (parsedUrl.pathname == '/phones') {

    let { q: query, order: sortOrder } = parsedUrl.query;
    
    let filterPhones = phonesFromServer.filter((phone) => {
      return phone.name.toLowerCase().includes(query)
    });
    
    switch (sortOrder) {
      case 'age':
        filterPhones.sort(sortByAge);
        break;
      case 'name':
      default:
        filterPhones.sort(sortByName);
    }

    res.end(JSON.stringify(filterPhones));
  } else {
    // иначе считаем это запросом к обычному файлу и выводим его
    file.serve(req, res); // (если он есть)
  }

}

function sortByName(a, b) {
  return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
}

function sortByAge(a, b) {
  return a.age - b.age;
}

// ------ этот код запускает веб-сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}