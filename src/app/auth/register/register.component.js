/**
 * Created by gundave on 2/18/19.
 */
const cities = require('all-the-cities-mongodb')

var citiesList = []

var cities = "";
cities.filter(city => {
  if(city.name.match('Varanasi')){
    citiesList = city.name;
  }
})

module.exports = citiesList
