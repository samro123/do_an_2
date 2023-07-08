const express = require('express');
const router = express.Router();
const blogcontroller = require('../app/controllers/Blogcontroller');

//tuyen duong doc tung tren xuong
router.get('/', blogcontroller.index);

module.exports = router;
