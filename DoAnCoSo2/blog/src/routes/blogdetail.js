const express = require('express');
const router = express.Router();
const blogdetailcontroller = require('../app/controllers/Blogdetailcontroller');

//tuyen duong doc tung tren xuong
router.get('/', blogdetailcontroller.index);

module.exports = router;
