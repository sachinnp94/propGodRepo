'use strict'
const mongoose = require('mongoose')
const Internship = mongoose.model('Internship')

class InternshipSearch {
	*createInternship (details) {
		console.log('creating Internship')
		return yield Internship.create(details)
	}
	*findInternship (details) {
		if(details.search){
		const search = details.search
		return yield Internship.find({ $or: [{name: new RegExp(search?'.*'+search+'.*':'.*','i')},{state: new RegExp(search?'.*'+search+'.*':'.*','i')},{city: new RegExp(search?'.*'+search+'.*':'.*','i')},{phonenumber: new RegExp(search?'.*'+search+'.*':'.*','i')},{qualification: new RegExp(search?'.*'+search+'.*':'.*','i')}]})

		} else {
			return {message: "enter some keywords"}
		}
	} 
	
}

module.exports = new InternshipSearch()

