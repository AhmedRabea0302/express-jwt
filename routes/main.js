const express = require('express');
const router = express.Router();
const { login, register, dashboard } = require('../controllers/main');

router.route('/dashboard').get(dashboard);
router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;