var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('school');
});

router.get('/college', function(req, res, next){
	res.render('front');
})
router.get('/company', function(req, res, next){
	res.render('front');
})
router.get('/places', function(req, res, next){
	res.render('front');
})
router.get('/job', function(req, res, next){
	res.render('front');
})
router.get('/internship', function(req, res, next){
	res.render('front');
})


module.exports = router;