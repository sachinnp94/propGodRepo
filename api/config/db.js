'use strict'

const mongoose = require('mongoose')
const config = require('../config.json')
mongoose.connect(config['mongodb-url'])

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + config['mongodb-url']);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + config['mongodb-url']);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
})
require('../models')