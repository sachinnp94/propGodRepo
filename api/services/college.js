'use strict'
const mongoose = require('mongoose')
const College = mongoose.model('College')

class CollegeInAbroad {
	*createCollege (details) {
		console.log('college creating')
		return yield College.create(details)
	}
	*findColleges (details) {
		if(details.search){
		const search = details.search
		return yield College.find({ $or: [{name: new RegExp(search?'.*'+search+'.*':'.*','i')},{state: new RegExp(search?'.*'+search+'.*':'.*','i')},{city: new RegExp(search?'.*'+search+'.*':'.*','i')},{country: new RegExp(search?'.*'+search+'.*':'.*','i')},{course1: new RegExp(search?'.*'+search+'.*':'.*','i')},{course2: new RegExp(search?'.*'+search+'.*':'.*','i')},{course3: new RegExp(search?'.*'+search+'.*':'.*','i')},{phonenumber: new RegExp(search?'.*'+search+'.*':'.*','i')}]})

		} else {
			return {message: "enter some keywords"}
		}
	} 
}

module.exports = new CollegeInAbroad()

