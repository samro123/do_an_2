const express = require('express');
const router = express.Router();
const admincontroller = require('../app/controllers/Admincontroller');

//tuyen duong doc tung tren xuong
router.get('/', admincontroller.index);

module.exports = router;
