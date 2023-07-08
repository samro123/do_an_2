const express = require('express');
const router = express.Router();
const shopcontroller = require('../app/controllers/Shopcontroller');

//tuyen duong doc tung tren xuong
router.get('/', shopcontroller.index);

module.exports = router;
