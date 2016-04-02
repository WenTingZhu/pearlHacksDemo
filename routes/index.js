var express = require('express');
var router = express.Router();

// default request for home page
// route handler for GET request
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home'
  });
});

/* Get About Page */
router.get('/resume', function(req, res) {
  res.render('resume', {
    title: 'Resume'
  });
});

/* Get Projects Page */
router.get('/project', function(req, res) {
  res.render('project', {
    title: 'Project'
  });
});

/* Get Contact Page */
router.get('/contact', function(req, res) {
  res.render('contact', {
    title: 'Contact'
  });
});

router.post('/contact', function (req, res) {
  res.render('thankYou', {
    title: 'Thank You',
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  });
});

module.exports = router;
