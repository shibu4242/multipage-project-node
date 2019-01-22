var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/404', function(req, res, next) {
  res.render('404', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/components', function(req, res, next) {
  res.render('components', { title: 'Express' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Express' });
});

router.get('/icons', function(req, res, next) {
  res.render('icons', { title: 'Express' });
});

router.get('/pricingbox', function(req, res, next) {
  res.render('pricingbox', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Express' });
});

router.get('/typography', function(req, res, next) {
  res.render('typography', { title: 'Express' });
});

module.exports = router;
