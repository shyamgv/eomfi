/**
 * Created by gundave on 3/3/19.
 */
const mongoose = require('mongoose');

const CitiesSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lat: {
    type: String
  },
  lng: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('Cities', CitiesSchema);
