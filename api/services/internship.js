'use strict'
const mongoose = require('mongoose')
const Internship = mongoose.model('Internship')

class InternshipSearch {
	*createInternship (details) {
		console.log('creating Internship')
		return yield Internship.create(details)
	}
	*findInternship (details) {
		return yield Internship.find(details)
	}
	
}

module.exports = new InternshipSearch()

