const Joi = require('joi');
const Cities = require('../models/cities.model');

const citiesSchema = Joi.object({
  country: Joi.string().required(),
  name: Joi.string().required(),
  lat: Joi.string(),
  lng: Joi.string()
})


module.exports = {
  select,
  insert
}

async function insert(city) {
  city = await Joi.validate(city, citiesSchema, { abortEarly: false });
  return await new Cities(city).save();
}

async function select(){
  return Cities.find({}, function(err, result) {
    if (err) throw err;
  }).select({"name": 1});
}
