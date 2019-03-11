// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
//const cities = require('cities.json');

require('./config/mongoose');


// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`);
  });
}

module.exports = app;

/*

var i, j, x = "";
for (i in cities) {
  // x += "<h2>" + myObj[i].country + "</h2>";

  if (cities[i].country == "IN") {
    //x += "{" + "country: " + '"' + myObj[i].country + "}";
    x += JSON.stringify(cities[i]) + ",\n";
  }
}
console.log(x)

//  console.log(cities.get);
*/

