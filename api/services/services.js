'use strict'
const mongoose = require('mongoose')
const Services = mongoose.model('Services')

class ServiceSearch {
	*createService (details) {
		console.log('creating service')
		return yield Services.create(details)
	}
	*findService (details){
		const search = details.search
		return yield Services.find({ $or: [{name: new RegExp(search?'.*'+search+'.*':'.*','i')},{servicetype: new RegExp(search?'.*'+search+'.*':'.*','i')},{state: new RegExp(search?'.*'+search+'.*':'.*','i')},{city: new RegExp(search?'.*'+search+'.*':'.*','i')},{phonenumber: new RegExp(search?'.*'+search+'.*':'.*','i')}]})
	} 
}

module.exports = new ServiceSearch()	

