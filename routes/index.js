var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('front');
});

router.get('/college', function(req, res, next){
	res.render('college');
})
router.get('/company', function(req, res, next){
	res.render('company');
})
router.get('/places', function(req, res, next){
	res.render('places');
})
router.get('/school', function(req, res, next){
	res.render('school');
})
router.get('/internship', function(req, res, next){
	res.render('internship');
})
router.get('/services', function(req, res, next){
	res.render('services');
})

module.exports = router;
