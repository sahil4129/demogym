const express = require('express');
const router = express.Router();
const adminLoginController = require('../controllers/adminLoginController');

router.route('/').post(adminLoginController.loginAdminfun);

module.exports = router;
