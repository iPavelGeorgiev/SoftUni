const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/:id', controllers.user.get);

router.post('/register', controllers.user.post.register);

router.post('/verify', controllers.user.post.verifyLogin);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.put('/:id', controllers.user.put);

router.delete('/:id', controllers.user.delete);

module.exports = router;