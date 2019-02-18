// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
require('./config/mongoose');
const cities = require('all-the-cities-mongodb')

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`);
  });
}

module.exports = app;
module.exports = cities;
const indianCities=[];

cities.filter(indianCities => {
  if(indianCities.country.match('IN')){
    console.log(indianCities);
  }
})
