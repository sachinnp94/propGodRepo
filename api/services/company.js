'use strict'
const mongoose = require('mongoose')
const Company = mongoose.model('Company')

class CompanySearch {
	*createCompany (details) {
		console.log('creating Company')
		return yield Company.create(details)
	}
	*findCompany (details) {
		if(details.search){
		const search = details.search
		return yield Company.find({ $or: [{name: new RegExp(search?'.*'+search+'.*':'.*','i')},{role: new RegExp(search?'.*'+search+'.*':'.*','i')},{state: new RegExp(search?'.*'+search+'.*':'.*','i')},{city: new RegExp(search?'.*'+search+'.*':'.*','i')},{phonenumber: new RegExp(search?'.*'+search+'.*':'.*','i')},{qualification: new RegExp(search?'.*'+search+'.*':'.*','i')}]})

		} else {
			return {message: "enter some keywords"}
		}
	} 
	
}

module.exports = new CompanySearch()

