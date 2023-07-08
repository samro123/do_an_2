const express = require('express');
const router = express.Router();
const checkoutcontroller = require('../app/controllers/Checkoutcontroller');

//tuyen duong doc tung tren xuong
router.get('/', checkoutcontroller.index);

module.exports = router;
