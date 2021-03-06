'use strict';

var express = require('express'),
    passport = require('passport'),
    auth = require('../auth.service');

var router = express.Router();

router
.get('/', passport.authenticate('google', {
    failureRedirect: '/login',
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ],
    session: false
}))

.get('/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    session: false
}), auth.setTokenCookie);

module.exports = router;
