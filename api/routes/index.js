'use strict'

var co = require('co')
var express = require('express')
const College = require('../services/college')
const School = require('../services/school')
const Places = require('../services/places')
const Services = require('../services/services')
const Company = require('../services/company')
var router = express.Router()

router.post('/create-college-details', co.wrap(function *  (req, res){
	console.log('body',req.body)
	let result = yield College.createCollege(req.body)
	res.send(result)
}))

router.post('/find-colleges', co.wrap(function* (req, res, next){
	let result = yield College.findColleges(req.body)
	res.send(result)
}))

router.post('/create-school-details', co.wrap(function * (req, res){
	console.log('body',req.body)
	let result = yield School.createSchool(req.body)
	res.send(result)
}))

router.post('/find-schools', co.wrap(function* (req, res, next){
	let result = yield School.findSchools(req.body)
	res.send(result)
}))

router.post('/create-service-details', co.wrap(function * (req, res){
	console.log('body',req.body)
	let result = yield Services.createService(req.body)
	res.send(result)
}))

router.post('/find-service', co.wrap(function * (req, res, next){
	let result = yield Services.findService(req.body)
	res.send(result)
}))

router.post('/create-place-details', co.wrap(function * (req, res){
	console.log('body',req.body)
	let result = yield Places.createPlace(req.body)
	res.send(result)
}))

router.post('/find-place', co.wrap(function* (req, res, next){
	let result = yield Places.findPlace(req.body)
	res.send(result)
}))

router.post('/create-company-details', co.wrap(function * (req, res){
	console.log('body',req.body)
	let result = yield Company.createCompany(req.body)
	res.send(result)
}))

router.post('/find-company', co.wrap(function* (req, res, next){
	let result = yield Company.findCompany(req.body)
	res.send(result)
}))

module.exports = router