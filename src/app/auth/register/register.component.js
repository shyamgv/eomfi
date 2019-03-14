/**
 * Created by gundave on 2/18/19.
 */
const cities = require('all-the-cities-mongodb')

var cities = "";
cities.filter(city => {
  if(city.name.match('Varanasi')){
    console.log(city.name);
  }
})

module.exports = citiesList
