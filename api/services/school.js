'use strict'
const mongoose = require('mongoose')
const School = mongoose.model('School')

class SchoolSearch {
	*createSchool (details) {
		console.log('school creating')
		return yield School.create(details)
	}
	*findSchools (details){
		if(details.search){
		const search = details.search
		return yield School.find({ $or: [{name: new RegExp(search?'.*'+search+'.*':'.*','i')},{state: new RegExp(search?'.*'+search+'.*':'.*','i')},{city: new RegExp(search?'.*'+search+'.*':'.*','i')},{phonenumber: new RegExp(search?'.*'+search+'.*':'.*','i')}]})

		} else {
			return {message: "enter some keywords"}
		}
	} 
}

module.exports = new SchoolSearch()

