const express = require('express');
const router = express.Router();
const { getAllSubscriptions } = require('../controllers/newsletterController');

router.get('/', getAllSubscriptions);

module.exports = router;