'use strict'
const mongoose = require('mongoose')
const Places = mongoose.model('Places')

class PlaceSearch {
	*createPlace (details) {
		console.log('creating place details')
		return yield Places.create(details)
	}
	*findPlace (details) {
		if(details.search){
		const search = details.search
		return yield Places.find({ $or: [{name: new RegExp(search?'.*'+search+'.*':'.*','i')},{state: new RegExp(search?'.*'+search+'.*':'.*','i')},{city: new RegExp(search?'.*'+search+'.*':'.*','i')},{district: new RegExp(search?'.*'+search+'.*':'.*','i')}]})

		} else {
			return {message: "enter some keywords"}
		}
	}
	
}

module.exports = new PlaceSearch()

