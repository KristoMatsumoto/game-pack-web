const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

router.get('/', controllers.home.getHome);
// router.get('/home', controllers.home.getHome);

// router.get('/singup', controllers.users.getCreateUser);
// router.post('/user', controllers.users.postCreateUser);
// router.get('/user/:id', controllers.users.getShowUser);

// router.get('/singin', controllers.sessions.getCreateSession);
// router.post('/singin', controllers.sessions.postCreateSession);
// router.delete('/logout', controllers.sessions.deleteDeleteSession);

module.exports = router;
