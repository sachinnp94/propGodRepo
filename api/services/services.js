'use strict'
const mongoose = require('mongoose')
const Services = mongoose.model('Services')

class ServiceSearch {
	*createService (details) {
		console.log('creating service')
		return yield Services.create(details)
	}
	*findService (details){
		return yield Services.find(details)
	} 
}

module.exports = new ServiceSearch()

