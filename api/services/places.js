'use strict'
const mongoose = require('mongoose')
const Places = mongoose.model('Places')

class PlaceSearch {
	*createPlace (details) {
		console.log('creating place details')
		return yield Places.create(details)
	}
	*findPlace (details) {
		return yield Places.find(details)
	}
	
}

module.exports = new PlaceSearch()

