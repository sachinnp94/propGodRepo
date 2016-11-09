'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

var college = mongoose.Schema({
	name: String,
	course1: String,
	course2: String,
	course3: String,
	country: String,
	state: String,
	city: String, 
	phonenumber: String
})

mongoose.model('College', college)

var school = mongoose.Schema({

	name:String,
	state: String,
	city: String,
	zipcode: Number,
	phonenumber: String
})

mongoose.model('School', school)

var places = mongoose.Schema({
	name: String,
	state: String,
	district: String,
	city: String
})

mongoose.model('Places', places)


var services = mongoose.Schema({
	name:String,
    servicetype : String,
    state: String,
    city: String,
    phonenumber: String
    
})

mongoose.model('Services', services)


var company = mongoose.Schema({
	name: String,
	role: String,
	qualification: String,
	vacancies: Number,
	salary: Number,
    phonenumber: String,
    city:String,
    state:String	
})
mongoose.model('Company', company)

var internship = mongoose.Schema({
	name: String,
	qualification: String,
	duration: Number,
	phonenumber: String,
	stipend: Number,
	city: String,
	state:String
})
mongoose.model('Internship', internship)

