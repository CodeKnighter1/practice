const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.get('/get', UserController.get);
router.post('/create', UserController.create);


module.exports = router;