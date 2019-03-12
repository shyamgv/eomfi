const express = require('express');
const asyncHandler = require('express-async-handler')
const passport = require('passport');
const userCtrl = require('../controllers/user.controller');
const authCtrl = require('../controllers/auth.controller');
const citiesCtrl = require('../controllers/cities.controller')
const config = require('../config/config');

const router = express.Router();
module.exports = router;

router.post('/register', asyncHandler(register), login);
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get('/me', passport.authenticate('jwt', { session: false }), login);
router.get('/cityList', asyncHandler(cityList));


async function register(req, res, next) {
  let user = await userCtrl.insert(req.body);
  user = user.toObject();
  delete user.hashedPassword;
  req.user = user;
  next()
}

function login(req, res) {
  let user = req.user;
  let token = authCtrl.generateToken(user);
  res.json({ user, token });
}

async function cityList(req, res, next) {
let citiesDetails = await citiesCtrl.select();
let i = "";
let cityNames = new Array();
for(i in citiesDetails) {
  cityNames.push(citiesDetails[i].name);
}
res.json(cityNames);
}
