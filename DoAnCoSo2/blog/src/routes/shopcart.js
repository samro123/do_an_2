const express = require('express');
const router = express.Router();
const shopcartcontroller = require('../app/controllers/Shopcartcontroller');

//tuyen duong doc tung tren xuong
router.get('/', shopcartcontroller.index);

module.exports = router;
