'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

var college = mongoose.Schema({
	name: String,
	courses: [{
		department: String,
		course: String,
		duration: String
	}],
	address: {
		country: String,
		state: String,
		city: String, 
		street: String,
		zipcode: Number
	},
	university: String,
	phonenumber: String
})

mongoose.model('College', college)

var school = mongoose.Schema({

	name:String,
	grade:Number,
	address: {
		state: String,
		city: String,
		street: String,
		zipcode: Number
	},
	phonenumber: String
})

mongoose.model('School', school)

var places = mongoose.Schema({
	state: String,
	city: String	
})

mongoose.model('Places', places)


var services = mongoose.Schema({
	name:String,
    address: {
		state: String,
		city: String,
		street: String,
		zipcode: Number
	},
    servicetype : String,
    phonenumber: String
    
})

mongoose.model('Services', services)


var company = mongoose.Schema({
	name: String,
	education: String,
	company: String,
	job: Boolean,
	Salary: Number
})
mongoose.model('Company', company)