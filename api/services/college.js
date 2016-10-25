'use strict'
const mongoose = require('mongoose')
const College = mongoose.model('College')

class CollegeInAbroad {
	*createCollege (details) {
		console.log('college creating')
		return yield College.create(details)
	}
	*findColleges (details) {
		return yield College.find(details)
	}
}

module.exports = new CollegeInAbroad()

