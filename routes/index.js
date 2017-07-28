var express = require('express');
var router = express.Router();
var passport = require('../Passport');
var acl = require("../Acl");

router.get('/test-passport',
  passport.authenticate('WindowsAuthentication'),
  function (req, res){
    res.json(req.user._json.sAMAccountName);
  });

router.get('/test-acl-1',
  passport.authenticate('WindowsAuthentication'),
	   function (req, res){
	       //res.json(req.session.userId);
	       //res.json(req.user._json.sAMAccountName);
	       res.json(req.user._json.mail);
	   });

router.get('/test-acl',
	   [passport.authenticate('WindowsAuthentication'), acl.middleware()],
	   function (req, res){
	       acl.allowedPermissions(req.session.userId, ['/t1/test-acl'], function(err, permissions){
		   console.log(permissions)
		   console.log(err)
	       })
	       //res.json(req.session.userId);
	       res.json(req.user._json.mail);
	   });

module.exports = router;
