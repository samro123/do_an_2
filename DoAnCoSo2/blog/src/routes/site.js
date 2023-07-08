const express = require('express');
const router = express.Router();
const sitecontroller = require('../app/controllers/Sitecontroller');

//tuyen duong doc tung tren xuong
router.get('/search', sitecontroller.search);
router.get('/', sitecontroller.index);

module.exports = router;
