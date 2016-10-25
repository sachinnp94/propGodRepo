'use strict'
const mongoose = require('mongoose')
const Company = mongoose.model('Company')

class CompanySearch {
	*createCompany (details) {
		console.log('creating Company')
		return yield Company.create(details)
	}
	*findCompany (details) {
		return yield Company.find(details)
	}
	
}

module.exports = new CompanySearch()

