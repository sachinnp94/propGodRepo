'use strict'
const mongoose = require('mongoose')
const School = mongoose.model('School')

class SchoolSearch {
	*createSchool (details) {
		console.log('school creating')
		return yield School.create(details)
	}
	*findSchools (details){
		return yield School.find(details)
	} 
}

module.exports = new SchoolSearch()

