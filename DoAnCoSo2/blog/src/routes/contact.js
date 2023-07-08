const express = require('express');
const router = express.Router();
const contactcontroller = require('../app/controllers/Contactcontroller');

//tuyen duong doc tung tren xuong
router.get('/', contactcontroller.index);

module.exports = router;
